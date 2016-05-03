

function doScope() {

	var value = 'Hello scope';	// doScope 지역 변수 value
	function showValue() {		// 내부 함수, 즉 클로저인 showValue()
		console.log(value);		// 부모 함수에 정의된 변수를 사용한다
	}
	showValue();
};

doScope();