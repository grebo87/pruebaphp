'use strict';

angular.module('Prueba')
	.controller('IndexEmpresaCtrl', function($scope, EmpresaResource) {
		$scope.Empresas = EmpresaResource.query();
	})
	.controller('CreateEmpresaCtrl', function($scope, EmpresaResource) {
		$scope.title = "Registro de Empresas";
		$scope.button = "Guardar Cambios";
		$scope.Empresa = {};
		$scope.Usuario = {};
		$scope.Data = {};

		$scope.saveEmpresa = function(){
			//console.log($scope.Data);
			//delete $scope.Data.user.r_password;
			EmpresaResource.save($scope.Data);
		};
		
	});