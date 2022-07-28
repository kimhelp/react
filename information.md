# 시작

front : npm run start
back : npm run backend

한번에 : npm run dev

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

1. 아이피를 proxy server에서 임의로 바꿔 버릴 수 있다. 그래서 인터넷에서는 접근하는 사람의 ip를 모르게 된다.
2. 보내는 데이터도 임의로 바꿀 수 있다.

### 장점

1. 방화벽 기능
2. 웹 필터 기능
3. 캐쉬 데이터, 공유 데이터 제공 기능

```sh
$ npm i http-proxy-middleware --save
```

# concurrently 이용한 back 서버 front 서버 한번에 켜기

```sh
npm i concurrently
```

npm run dev

# ant-design

```sh
npm i antd
```

import 'antd/dist/antd.css';

# redux

상태관리 라이브러리 state container

### dependency

1. redux
2. react-redux
3. redux-promise
   > dispatch한테 promise가 왔을 때 어떻게 대처를 해야할지 알려줌
4. redux-thunk
   > fuction을 넣는 방법을 알려줌

```sh
npm i redux react-redux redux-promise redux-thunk --save
```

### combineReducer를 이용해서 여러 state를 합칠것이다. \_reducers/index.js

### props

1. 부모컨포넌트의 데이터를 바꿔야 자식컨포넌트 데이터를 바꿀 수 있다.
2. 자식 컨포넌트가 있다는 가정하에 데이터 이동이 계단식으로 이동한다.

### state (redux)

1. 자식 부모 상관없이 하나의 컴포넌트 안에서 데이터 교환이 이루어진다.

### redux data flow > 한방향으로 데이터가 흐른다.

### reducer

이전 state와 action object를 받은 후에 next state를 return한다!

# react component

1. class component

2. functional component
   > 기능 제약이 많다... 그래서 필요한 react hooks!

### react hooks!

1. useState
2. useEffect

# login 페이지 만들기
