var app = angular.module("core-app",[]);
function homeRedirect() {
  document.location.hash = "";
  document.location = document.location;
}
