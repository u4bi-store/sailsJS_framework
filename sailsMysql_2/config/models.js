module.exports.models = {
  connection: 'someMysqlServer',
  migrate: 'drop'
};

/*
drop:  서버를 죽였다가 다시 띄울 때마다 테이블을 다시 날려버리는 옵션입니다. 개발할 때 좋음.
alter: 서버를 죽였다가 다시 띄울 때 모델에 칼럼의 변경사항을 체크해서
       업데이트 해주는 옵션임. 데이터는 살아있음.
safe:  서버를 죽였다가 다시 띄워도 아무것도 하지 않음.
*/
