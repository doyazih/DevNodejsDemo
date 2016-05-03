

function clouserFunction() {
	var value = 'Hello closure';
	function showValue() {
		console.log(value);
	}
	return showValue;
}

var myFunction = clouserFunction();	// 1.clouserFunction() 함수 호출 시점에 showValue()함수를 반환.

myFunction();						// 2.반환 된 showValue() 함수 실행 시점, 정상적으로 실행 되면서 value 변수를 참조하고 있다. How?
									// 이것이 Closure 의 개념. Closuer 는 독립적 변수 함수이며, 만들어질 당시 환경?을 기억한다.
									// 즉, "함수" 와 "함수가 만들어진 환경(Scope Chain)"을 기억하는 특별한 객체의 종류를 말함.