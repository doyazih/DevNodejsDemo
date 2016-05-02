module.exports = {
    query: function (query, callback) {
        
        var result = [
            { name: 'Luffy', position: 'Captine'  },
            { name: 'Zoro', position: 'Vice-captine' },
            { name: 'Nami', position: 'Navigator' },
            { name: 'Usopp', position: 'Sniper' }
        ];

        if (callback && typeof(callback) == 'function') {
            callback(null, result);
            return;
        }
        else {
            
            return result;
        }
    }
}