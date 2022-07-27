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

# auth route 만들기

이유 : 어떤 사이트를 들어갔을때 > 로그인 후 이용가능한 페이지와 어드민로그인 후 이용가능한 페이지를 구분

지금 데이터 상태

> DB User정보에 Token값 들어가 있음
> 쿠키에 토큰도 들어있음.

# 로그아웃 route

1. 로그아웃 하려는 유저를 데이터 베이스에서 찾아서
2. 유저의 토큰을 지워준다.

# react 설치

```sh
$ npx create-react-app .
```

# functioanl 컴포넌트 설정

extensions에서 es7 > ES7 React/Redux/GraphQL/React-Native snippets 다운로드 > rfce

# class 컴포넌트 설정

extensions에서 es7 > ES7 React/Redux/GraphQL/React-Native snippets 다운로드 > rcc

# react-router-dom 설치

```sh
$ npm install react-router-dom --save
```

# axios 설치

```sh
$ npm i axios --save
```

# proxy 설치

```sh
$ npm i http-proxy-middleware --save
```
