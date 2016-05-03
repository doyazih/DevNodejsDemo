//Closuer의 일반 사용

function createMultiplier(multiplier) {
	return function (multiplicand) {
		console.log('%d*%d=%d', multiplicand, multiplier, multiplier*multiplicand);
	};
}

//Closuer 함수 생성 시 입력 변수 값에 따른 환경정보를 기억해서
//익명 함수 호출 시 해당 환경 변수를 사용한다.
var multiplier2 = createMultiplier(2);
var multiplier4 = createMultiplier(4);
var multiplier8 = createMultiplier(8);

var multiplicand = 10;

//Array 등에 넣고 일괄 처리 등을 할 수 있다.
var multipliers = [multiplier2, multiplier4, multiplier8];

multipliers[0](multiplicand);
multipliers[1](multiplicand);
multipliers[2](multiplicand);

