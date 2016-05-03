

//#2 Lexical scoping
//var value = 'Hello global hoisting';	//실행환경 고려하는 것이 아니라 '코드 그대로의 환경'을 기준으로 정의한 변수 스코프에서 검색한다. (Static scoping or Lexical scoping)

function hoist() {
	//var value; //#1 변수 선언문을 끌어 올린다?
	console.log('Value=%s', value);
	var value = 'Hello hoisting';
	console.log('Value=%s', value);
};

hoist();
