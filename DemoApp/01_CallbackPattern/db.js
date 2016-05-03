
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
		{ name: 'Luffy',	position: 'Captine' }, 
		{ name: 'Zoro',		position: 'Swordsman' }, 
		{ name: 'Nami',		position: 'Navigator' },
		{ name: 'Usopp',	position: 'Sniper' }, 
		{ name: 'Sanji',	position: 'Cook' }, 
		{ name: 'Chopper',	position: 'Doctor' },
		{ name: 'Robin',	position: 'Archaeologist' }, 
		{ name: 'Franky',	position: 'Shipwright' }, 
		{ name: 'Brook',	position: 'Musician' }
	];
};