'use strict';
angular.module('starter').factory('authService', ['$http', function ($http) {

    var landingPageSearchResultFactory = {};
    var _login = function (searchQuery) {
	 
        return $http.post('http://localhost:57585/api/User/Save', searchQuery).then(function (results) {
            return results;
        });
    }
    //var _getStates = function () {
    //    return $http.get('../api/GlobalProvider/SearchCity').then(function (results) {
    //        return results;
    //    });
    //}
    //var _getSpeciality = function () {
    //    return $http.get('/api/GlobalProvider/SearchSpecialization').then(function (results) {
    //        return results;
    //    });
    //}
    //var _getlocation = function () {
    //    return $http.get('/api/GlobalProvider/SearchLocation').then(function (results) {
    //        return results;
    //    });
    //}
    //var _searchWithFilter = function (filter) {
    //    return $http.post('../api/GlobalProvider/Search', filter).then(function (results) {
    //        return results;
    //    });
    //}
    //var _getCities = function () {
    //    return $http.get('../api/City/Search').then(function (results) {
    //        return results;
    //    });
    //}
    //var _getLoggedInPatientCity = function () {
    //    var model = {}
    //    model.ID = 0;
    //    return $http.post('../api/patient/Edit', model).then(function (results) {
    //        return results;
    //    });
    //}
    //var _getDiagnosticServices = function () {
    //    return $http.get('../api/Suggestion/SearchDiagnosticKeyword?SearchFor=DiagnosticCenterKeyword&&SearchString=').then(function (results) {
    //        return results;
    //    });
    //}
    //var _getDiagnosticlocation = function () {
    //    return $http.get('/api/GlobalServiceProvider/SearchLocation').then(function (results) {
    //        return results;
    //    });
    //}
    //var _getDiagnosticCity = function () {
    //    return $http.get('/api/GlobalServiceProvider/SearchCity').then(function (results) {
    //        return results;
    //    });
    //}
    //var _searchDiagnosticQueryResult = function (searchQuery) {
    //    return $http.post('api/GlobalServiceProvider/Search', searchQuery).then(function (results) {
    //        return results;
    //    });
    //}


    //var _saveLikeDoctor = function (searchQuery) {
    //    return $http.post('api/PatientFavorites/SaveLikeDoctor', searchQuery).then(function (results) {
    //        return results;
    //    });
    //}

    //var _saveFavoriteDoctor = function (searchQuery) {
    //    return $http.post('api/PatientFavorites/SaveFavoriteDoctor', searchQuery).then(function (results) {
    //        return results;
    //    });
    //}

    //var _saveLikeDiagnisticCenter = function (searchQuery) {
    //    return $http.post('api/PatientFavorites/SaveLikeDiagnisticCenter', searchQuery).then(function (results) {
    //        return results;
    //    });
    //}

    //var _saveFavoriteDiagnisticCenter = function (searchQuery) {
    //    return $http.post('api/PatientFavorites/SaveFavoriteDiagnisticCenter', searchQuery).then(function (results) {
    //        return results;
    //    });
    //}

    //var _saveLikeMedicalCenter = function (searchQuery) {
    //    return $http.post('api/PatientFavorites/SaveLikeMedicalStore', searchQuery).then(function (results) {
    //        return results;
    //    });
    //}

    //var _saveFavoriteMedicalCenter = function (searchQuery) {
    //    return $http.post('api/PatientFavorites/SaveFavoriteMedicalStore', searchQuery).then(function (results) {
    //        return results;
    //    });
    //}

    //var _postComment = function (model) {
    //    return $http.post('../api/Feedback/Save', model).then(function (results) {
    //        return results;
    //    });
    //}
    //var _getReviewResult = function (model) {
    //    return $http.post('api/Feedback/GetReviewsByDoctor', model).then(function (results) {
    //        return results;
    //    });
    //}
    //var _requestAppointmentMessage = function (model) {
    //    return $http.post('api/Appointment/RequestAppointment', model).then(function (results) {
    //        return results;
    //    });
    //}

    //landingPageSearchResultFactory.searchDiagnosticQueryResult = _searchDiagnosticQueryResult;
    //landingPageSearchResultFactory.getDiagnosticCity = _getDiagnosticCity;
    //landingPageSearchResultFactory.getDiagnosticlocation = _getDiagnosticlocation;
    //landingPageSearchResultFactory.getDiagnosticServices = _getDiagnosticServices;
    //landingPageSearchResultFactory.getlocation = _getlocation;
    //landingPageSearchResultFactory.getSpeciality = _getSpeciality;
    //landingPageSearchResultFactory.searchWithFilter = _searchWithFilter;
    landingPageSearchResultFactory.login = _login;
    //landingPageSearchResultFactory.getStates = _getStates;
    //landingPageSearchResultFactory.getCities = _getCities;
    //landingPageSearchResultFactory.getLoggedInPatientCity = _getLoggedInPatientCity;
    //landingPageSearchResultFactory.postComment = _postComment;
    //landingPageSearchResultFactory.saveLikeDoctor = _saveLikeDoctor;
    //landingPageSearchResultFactory.saveFavoriteDoctor = _saveFavoriteDoctor;
    //landingPageSearchResultFactory.saveLikeDiagnisticCenter = _saveLikeDiagnisticCenter
    //landingPageSearchResultFactory.saveFavoriteDiagnisticCenter = _saveFavoriteDiagnisticCenter
    //landingPageSearchResultFactory.saveLikeMedicalCenter = _saveLikeMedicalCenter
    //landingPageSearchResultFactory.saveFavoriteMedicalCenter = _saveFavoriteMedicalCenter
    //landingPageSearchResultFactory.getReviewResult = _getReviewResult;
    //landingPageSearchResultFactory.requestAppointmentMessage = _requestAppointmentMessage;
    return landingPageSearchResultFactory;
}]);

