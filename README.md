# memo
-------------------------------------------------
**해당 기능은 NodeJs v12 기준으로 작성되었으며 v14에서도 작동합니다!**

사용한 모듈
-------------------------------------------------

[**quick.db**](https://www.npmjs.com/package/quick.db)

[**knex**](https://www.npmjs.com/package/knex)

-------------------------------------------------

수정하기
-------------------------------------------------

1. .env.example 파일을 .env로 수정한다.
2. .env 파일을 열어서
  - token은 봇 토큰
  - prefix는 봇 접두사(접두어)
  - FILE은 knex 버전을 쓸거라면 \*.db(또는 \*.sqlite, \*.sqlite3)가 있는 위치

-------------------------------------------------


실행하기
-------------------------------------------------

quick.db에 들어가서 node .을 입력하거나
sqlite3(knex)에 들어가서 node .을 입력한다.

-------------------------------------------------

Knex 유의점
-------------------------------------------------
knex는 mysql이나 sqlite3을 지원한다.
만약 sqlite3을 쓸거라면 .env를 열어서 데이터베이스(\*.db, \*.sqlite, \*.sqlite3) 파일 위치를 넣는다.

mysql은 [이부분](https://github.com/turtle85917/memo/blob/e9f76637c8d1a0a346cd0d3f78da0fc5779e8525/sqlite3(knex)/memo.js#L2)을

```js
db = knex({
  client: 'mysql',
  connection: {
    host : 'HOST',
    user : 'USER',
    password : 'PASSWORD',
    database : 'DATABASE'
  }
});
```

라고 수정한다. (HOST, USER, PASSWORD, DATABASE는 각각 mysql에 host, user, password, database로 수정한다.)
