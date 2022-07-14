const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;

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
      //인자값 : 암호화할 데이터, salt
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        //user.password를 해쉬로 바꿔준다.
        user.password = hash;
        next();
      });
    });
  }
  //비밀번호 암호화, bcrypt

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
