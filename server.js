const http = require('http');
const server = http.createServer((req,rep)=>{
  console.log(req.url, req.headers.cookie);
  rep.writeHead(200, {'Set-Cookie':'Coooookie=Cookidas; ID=checkSuccess'},{'Content-Type':'text/html'});
  rep.end(`<DOCTYPE html>
  <html lang="ko">
  <head>
  <title>쿠키 테스트</title>
  <meta charset="utf-8">
  </head>
  <body>
  <h1>쿠키 테스트</h1>
  <p>너의 요청 url은 = ${req.url}</p>이고 <br>
  <p>너의 쿠키는 ${req.headers.cookie}야
  </body>
  </html>`);
})
.listen(2080, ()=>{
  console.log('2080포트 서버 대기');
})

// 생성자 함수 Class URL
const url = new URL('hahaha?name="곽윤호"&age=20','http://127.0.0.1:2080'); // 첫 매개변수 => path / 두 번재 매개변수 => host
console.log(url);                                                           // URL객체 조회
console.log(url.port);                                                      // URL의 포트 조회
console.log(url.hostname);                                                  // URL의 포트를 제외한 호스트
console.log(url.host);                                                      // URL의 호스트(포트 포함)
console.log(url.pathname);                                                  // URL의 경로
console.log(url.searchParams.get('name'));                                  // URL에 입력된 정보값
console.log(url.searchParams.get('age'));                                   // URL에 입력된 정보값