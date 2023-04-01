# 쿠키 설정과 URL객체
- 쿠키 설정 : http의 응답 부분 중
  - writeHead(200, {'Set-Cookie':'keys=value'}) 로 부여한다
- new URL =>
  - 생성자 함수 URL path와 host, params등 다양하고 유용한 객체