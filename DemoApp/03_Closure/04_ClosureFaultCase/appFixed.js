function showHelpMessage(helpMessage) {
	console.log(helpMessage);
};

function createHelpMessageViewer(helpMessage) {
	
	return function () {
		showHelpMessage(helpMessage);
	};
};

function createHelper() {
	var helper = {};

	var helpList = [
		{ 'id': 'email', 'helpMessage': 'Your e-mail address' },
		{ 'id': 'name', 'helpMessage': 'Your full name' },
		{ 'id': 'age', 'helpMessage': 'Your age (you must be over 16)' }
	];
	
	for (var i = 0; i < helpList.length; i++) {
		var item = helpList[i];
		
		//반복문 내에서 자주하는 실수
		//Closuer 함수 내의 scope 의 변수를 사용하기 때문에 예기치 않은 오류가 발생.
		//item loop 의 마지막 list 값만 참조 됨.
		helper[item.id] = createHelpMessageViewer(item.helpMessage);
	}
	return helper;
};

var helper = createHelper();

helper.email();
helper.name();
helper.age();

