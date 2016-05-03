var createCounter = function () {
	var privateCount = 0;
	function changeBy(val) {
		privateCount += val;
	}
	
	// 즉 privateCounter, changeBy 는 외부에서 접근할 수 없는 private 변수
	// 반환 객체 생성 시 increment, decrement, value 라는 익명함수 정의가 포함되며, 이 세함수는 privateCounter, changeBy() 함수라는 정의 환경을 공유하는 Closure 이다.
	return {
		increment: function () {
			changeBy(1);
		},
		decrement: function () {
			changeBy(-1);
		},
		value: function () {
			return privateCount;
		}
	}
};

//객체지향 언어 같이 closuer 를 통해 캡슐화, 정보 은닉 가능
var counter1 = createCounter();
var counter2 = createCounter();

console.log(counter1.value()); // logs 0
counter1.increment();
counter1.increment();
counter1.increment();
console.log(counter1.value()); // logs 3
counter1.decrement();
console.log(counter1.value()); // logs 2

console.log(counter2.value());	// logs 0
counter2.increment();
console.log(counter2.value());	// logs 1

