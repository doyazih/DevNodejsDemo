
module.exports = {
	querySync: function (query) {
		
		var result;
		
		try {
			result = getStrawHatCrew(query);
			return result;
		}
		catch (ex) {
			throw ex;
		}
	},
	query: function (query, callback) {
		
		var result;
		
		try {
			result = getStrawHatCrew(query);
			
			return callback(null, result);
		}
		catch (ex) {
			return callback(ex);
		}
	}
};

var getStrawHatCrew = function (query) {
	
	return [
		{ no: 1,	name: 'Luffy',		position: 'Captine' }, 
		{ no: 2,	name: 'Zoro',		position: 'Swordsman' }, 
		{ no: 3,	name: 'Nami',		position: 'Navigator' },
		{ no: 4,	name: 'Usopp',		position: 'Sniper' }, 
		{ no: 5,	name: 'Sanji',		position: 'Cook' }, 
		{ no: 6,	name: 'Chopper',	position: 'Doctor' },
		{ no: 7,	name: 'Robin',		position: 'Archaeologist' }, 
		{ no: 8,	name: 'Franky',		position: 'Shipwright' }, 
		{ no: 9,	name: 'Brook',		position: 'Musician' }
	];
};