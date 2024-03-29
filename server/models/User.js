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
    //비밀번호를 암호화 시킨다.
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

userSchema.statics.findByToken = function (token, cb) {
  var user = this;

  //토큰을 디코드 한다.

  jwt.verify(token, "secretToken", function (err, decoded) {
    //유저 아이디를 이용해서 유저를 찾은 당므에
    //클라이언트에서 가져온 token과 db에 보관된 토큰이 일치하는지 확인
    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return cb(err); //에러가 있으면 에러 반환후 함수 종료
      cb(null, user); //에러가 없으면 user값 반환
    });
  });
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
