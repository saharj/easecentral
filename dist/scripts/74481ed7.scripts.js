"use strict";window.PhonicsApp=angular.module("PhonicsApp",["ngCookies","ngResource","ngSanitize","ngRoute","ui.ace"]),PhonicsApp.config(function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}),PhonicsApp.controller("MainCtrl",function(a){a.editor=null,a.editingLanguage="yml",a.aceLoaded=function(b){a.editor=b},a.aceChanged=function(a){console.log(a)},a.switchToLanguage=function(b){a.editingLanguage=b;var c=a.editor.getSession().getValue(),d=null;"yml"===b&&(d=JSON.parse(c),d=jsyaml.dump(d)),"json"===b&&(d=jsyaml.load(c),d=JSON.stringify(d,null,2)),a.editor.getSession().setValue(d)}});