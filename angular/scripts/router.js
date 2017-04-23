'use strict';

angular.module('Prueba',['ngResource','ngRoute'])
	.config(function($routeProvider){
		$routeProvider
		.when('/empresas',{
			templateUrl: 'views/empresas/index.html',
			controller: 'IndexEmpresaCtrl'
		})
		.when('/empresas/new',{
			templateUrl: 'views/empresas/create.html',
			controller: 'CreateEmpresaCtrl'
		})
		
		.otherwise({
			redirectTo: '/'
		});
	});