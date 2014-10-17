###
	Application
###

application = angular.module 'application', ['ngResource', 'ngRoute', 'ngRetina', 'LocalStorageModule', 'qDecorator', 'lcTouch']

application.config ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider)->
	$routeProvider
		.when('/example', { templateUrl: 'templates/example.html', controller: 'ExampleCtrl' })

		.otherwise({ redirectTo: '/example' })
]