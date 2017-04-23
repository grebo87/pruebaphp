'use strict';

angular.module('Prueba')
	.factory('EmpresaResource',function($resource) {
		return $resource('http://127.0.0.1/prueba/laravel/public/empresas/:id', { id : "@id"});
	});

