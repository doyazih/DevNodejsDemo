
//함수 단위 유효범위
//변수명 중복 허용
//var keyword 생략 (생략 시 global)

function checkScopeBounday() {
	
	var a = 0;

	if (true) {
		
		var a = 100;

		for (var b = 0; b < 5; b++) {
			console.log('b=%d', b);
		}

		console.log('b=%d (Outside for loop)', b);
	}

	console.log('a=%d (Outside if)', a);
};

checkScopeBounday();