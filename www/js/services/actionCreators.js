/**
 * @ngdoc service
 * @name actionCreators
 * @description
 * # actionCreators
 * Service in the hifzTracker.services
 * Central location for sharedState information.
 */
app.service('actionCreators', ['stateService', 'hifzService', function (stateService, hifzService) {
		return {
		getInitialState: function () {
			var action = {
				type: INIT_STATE,
				payload: {
					users: hifzService.getUsers(),
					currentId: hifzService.getCurrentId(),
					currentLang: hifzService.getCurrentLang(),
					currentTheme: hifzService.getCurrentTheme()
				}
			};
			stateService.reduce(action);
		},
		rateWird: function (index, rating, user) {
			var updatedUser = hifzService.rateWird(index, rating, user);
			var action = {
				type: RATE_WIRD,
				payload: {
					user: updatedUser,
				}
			};
			stateService.reduce(action);
		},
		addWird: function (wird, user) {
			var updatedUser = hifzService.addWird(wird, user);
			var action = {
				type: ADD_WIRD,
				payload: {
					user: updatedUser,
				}
			};
			stateService.reduce(action);
		},
		removeWird: function (index, user) {
			var updatedUser = hifzService.removeWird(index, user);
			var action = {
				type: REMOVE_WIRD,
				payload: {
					user: updatedUser,
				}
			};
			stateService.reduce(action);
		},
		loadMore: function (increment) {
			var action = {
				type: LOAD_MORE,
				payload: {
					increment: increment,
				}
			};
			stateService.reduce(action);
		},
		saveUser: function (user) {
			var savedUser = hifzService.saveUser(user);
			var action = {
				type: SAVE_USER,
				payload: {
					user: savedUser,
				}
			};
			stateService.reduce(action);
		},
		deleteUser: function (user) {
			var users = hifzService.deleteUser(user);
			var action = {
				type: DELETE_USER,
				payload: {
					user: user,
					users: users,
				}
			};
			stateService.reduce(action);
		},
		switchUser: function (userId) {
			var currentId = hifzService.switchUser(userId);
			var action = {
				type: SWITCH_USER,
				payload: {
					currentId: currentId,
				}
			};
			stateService.reduce(action);
		}
		};
}]);