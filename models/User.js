const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    trim: true,
    maxlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  tokenExp: {
    type: String,
  },
});

//user정보를 저장하기 전에 function을 줘서 암호화한다음, index.js로 보낸다.
userSchema.pre("save", function (next) {
  var user = this;
  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      //비밀번호 암호화, bcrypt
      //인자값 : 암호화할 데이터, salt
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        //user.password를 해쉬로 바꿔준다.
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});
userSchema.methods.comparePassword = function (plainPassword, cb) {
  //가공되지않은 클라이언트 패스워드 : plainPassword
  //이미 암호화 되어서 데이터베이스에 담겨있는 비밀번호는 복호화 할 수 없기 때문에
  //plainPassword를 암호화해서 비교해야함
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};
userSchema.methods.generateToken = function (cb) {
  var user = this;
  //jsonwebtoken을 이용해서 토큰 생성
  var token = jwt.sign(user._id.toHexString(), "secretToken");
  // user._id + 'secretToken' = token
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
