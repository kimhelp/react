# 시작

front : npm run backend

# mongoose 다운로드

```
npm install mongoose --save

```

# mongoDB 연결

private.md에 아이디 비번있음.

# body-parser dependency

```
$ npm i body-parser --save
```

# node-mon

코드가 변경된걸 자동으로 감지해서 서버를 새로고침 해준다.

```
$ npm i nodemon --save-dev
```

실행 명령어 설정
pakage.json "backend" : "nodemon index.js"

# Bcrypt

비크립트를 이용한 암호화후 데이터베이스에 올리기

```
$ npm i bcrypt --save
```

1. salt 생성
2. 비밀번호 암호화
3. saltRounds = salt가 몇 글자인지 정하는것

# 로그인 토큰 만들기 > JsonWebToken

```
$ npm i jsonwebtoken --save
```

# 토큰을 쿠키에 저장하려고 cookie-parser를 씀

```
$ npm i cookie-parser --save
```
