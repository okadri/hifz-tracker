/**
 * @ngdoc service
 * @name hifzService
 * @description
 * # hifzService
 * Service in the hifzTracker.services
 * Central location for sharedState information.
 */
app.factory("hifzService", ['$window', '$translate', function ($window, $translate) {
	return {
		set: function (key, value) {
			$window.localStorage[key] = value;
		},
		get: function (key, defaultValue) {
			return $window.localStorage[key] || defaultValue;
		},
		setObject: function (key, value) {
			$window.localStorage[key] = JSON.stringify(value);
		},
		getObject: function (key) {
			return JSON.parse($window.localStorage[key] || '{}');
		},
		getArray: function (key) {
			return JSON.parse($window.localStorage[key] || '[]');
		},
		setArray: function (key, value) {
			this.setObject(key, value);
		},

		getUsers: function () {
			return this.getArray('users');
		},
		getCurrentLang: function () {
			var currentLang = this.getObject('currentLang');
			if (!currentLang.code) {
				var preferredCode = $translate.preferredLanguage();
				var supportedCodes = allLanguages.map(function (language) { return language.code; });
				var preferredIndex = supportedCodes.indexOf(preferredCode);
				currentLang = preferredIndex < 0 ? allLanguages[0] : allLanguages[preferredIndex];
				this.setObject('currentLang', currentLang);
			}
			return currentLang;
		},
		getCurrentId: function () {
			var currentId = this.get('currentId', 0);
			// Select first user if currentId was never set
			if (currentId === 0) {
				var users = this.getUsers();
				currentId = users.length ? users[0].id : 0;
				this.set('currentId', currentId);
			}
			return currentId;
		},
		rateWird: function (index, rating, user) {
			var surah = user.wirds[index];

			// Set reading time
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth() + 1; //January is 0!
			var yyyy = today.getFullYear();

			surah.lastRead = mm + '/' + dd + '/' + yyyy;

			// Remove from current location
			user.wirds.splice(index, 1);

			// Determine next location based on rating
			switch (rating) {
				case 'POOR':
					surah.rating = 'POOR';
					var position = Math.floor(user.wirds.length * 0.25);
					user.wirds.splice(position, 0, surah);
					break;
				case 'WEAK':
					surah.rating = 'WEAK';
					var position = Math.floor(user.wirds.length * 0.50);
					user.wirds.splice(position, 0, surah);
					break;
				case 'OKAY':
					surah.rating = 'OKAY';
					var position = Math.floor(user.wirds.length * 0.75);
					user.wirds.splice(position, 0, surah);
					break;
				default:
					surah.rating = 'PERFECT';
					user.wirds.push(surah);
			}

			return this.saveUser(user);
		},
		saveUser: function(user) {
			var users = this.getUsers();

			if (user.id) {
				var userIndex = users.indexOf(users.find(function(u) { return u.id == user.id; }));
				if (userIndex >= 0) {
					users[userIndex] = user;
					this.setArray('users', users);
					return user;
				} else {
					// This should never happen
				}
			} else {
				// User is new: generate an id and create user
				var lastId = users.map(function(u) { return u.id; }).sort().pop();
				user.id = lastId + 1;
				users.push(user);
				this.setArray('users', users);
				return user;
			}
		}
	}
}]);