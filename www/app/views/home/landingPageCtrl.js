(function () {
    'use strict';
    angular.module('starter').controller('landingPageCtrl', ['authService','$state', loginController]);
    function loginController(authService,$state) {
        var vm = this;
        vm.message = '';
        vm.loginData = {
            userName: "",
            password: ""
        };
		
        vm.login = function () {
            console.log('hio');
            //angular.element('#loginPwd').blur();
            //vm.message = '';
            //if (vm.loginData.userName == "" || vm.loginData.userName == undefined) {
            //    vm.message = "Please enter user name.";
            //    common.showErrorPopup(vm.message);
            //    return;
            //}

            //if (vm.loginData.password == "" || vm.loginData.password == undefined) {
            //    vm.message = "Please enter password.";
            //    common.showErrorPopup(vm.message);
            //    return;
            //}
            //vm.loginFlag = false;
            //var loggedInUser = {};
            //vm.lastLoggedIn = '';
            //vm.authentication = authService.authentication;
            ////loggedInUser = localStorageService.get('loggedInUserName');

            //common.showLoader();
            vm.loginData = { username: 'chetan', password: 'amol' };
            authService.login(vm.loginData).then(function (response) {
			
			console.log(response);
            })
			$state.go('login');
            //    appHomeService.getCurrentLoggedInProvider().then(function (results) {
            //        //if (!results.data.success && results.data.success != undefined) {
            //        //    vm.errors = [];
            //        //    vm.errors.push(common.getAjaxStateErrors(results)[0]);
            //        //}
            //        //else {
            //        localStorageService.set('currentLoggedInProviderId', { currentLoggedInProviderId: results.data });
            //        localStorageService.set('loggedInUserName', vm.authentication);
            //        $rootScope.$broadcast('OnCurrentUserLoggedIn', { currentLoggedInProvider: localStorageService.get('currentLoggedInProviderId') });
            //        $rootScope.$broadcast('OnSetLoggedInUserName', {});
            //        var model = {};
            //        model.forAppointment = "ForAppointmentCalendar";
            //        appHomeService.getClinic(model).then(function (results) {
            //            localStorageService.set('clinicId', { clinicId: results.data.items[0] });

            //        }, function (error) {
            //            common.hideLoader();
            //        });

            //        var currentUserType = localStorageService.get('currentLoggedInProviderId').currentLoggedInProviderId[1];
            //        if (currentUserType == '2') {
            //            var currentLoggedInUserInfo = localStorageService.get('currentLoggedInProviderId');
            //            if (currentLoggedInUserInfo != null) {
            //                if (currentLoggedInUserInfo.currentLoggedInProviderId.length > 0) {
            //                    vm.lastLoggedIn = currentLoggedInUserInfo.currentLoggedInProviderId[2];
            //                }
            //            }
            //            if (vm.lastLoggedIn == "") {
            //                common.hideLoader();
            //                vm.loginFlag = true;
            //                localStorageService.set('isOTP', { status: true });
            //                $state.go('app.doctorChangePassword');
            //            }
            //            else {
            //                //$location.path('/app/appointment');
            //                $state.go('app.doctorAppointment', {}, { reload: true });

            //            }
            //        }
            //        else if (currentUserType == '3') {
            //            patientService.getPatientByRegistrationId().then(function (results) {
            //                if (!results.data.success && results.data.success != undefined) {
            //                    //vm.errors = common.getAjaxStateErrors(results);
            //                }
            //                else {
            //                    if (results.data.items != null)
            //                        localStorageService.set('loggedInPatientId', results.data.items[0].id);
            //                }

            //            }, function (error) {
            //                common.hideLoader();
            //            });
            //            var currentLoggedInUserInfo = localStorageService.get('currentLoggedInProviderId');
            //            if (currentLoggedInUserInfo != null) {
            //                if (currentLoggedInUserInfo.currentLoggedInProviderId.length > 0) {
            //                    vm.lastLoggedIn = currentLoggedInUserInfo.currentLoggedInProviderId[2];
            //                }
            //            }
            //            if (vm.lastLoggedIn == "") {
            //                common.hideLoader();
            //                vm.loginFlag = true;
            //                localStorageService.set('isOTP', { status: true });
            //                $state.go('app.changePassword');
            //            }
            //            else {
            //                $state.go('app.searchDoctor');
            //            }
            //        }
            //        appInitializer.Initialize();
            //        $rootScope.$broadcast('LogOnStatuChanged', {});
            //        common.hideLoader();
            //        //$rootScope.$broadcast('onLoggedInSelectCity', {});
            //        //}
            //    }, function (error) {
            //        common.hideLoader();
            //    });

            //},
            //    function (err) {
            //        common.hideLoader();
            //        vm.message = err.error_description;
            //        common.showErrorPopup(vm.message);
            //        vm.loginData.password = "";
            //    });
        };

      
    };
})();