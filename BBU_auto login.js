// ==UserScript==
// @name         BBU自动登录
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  蚌埠学院BBU自动登录
// @author       汪布斯
// @match        http://1.1.2.3/0.htm
// @run-at       document-body
// @grant        none
// ==/UserScript==
 
(function() {
    'use strict';
    document.getElementsByTagName("input")[0].value="*****";
    document.getElementsByTagName("input")[1].value="*****";
    function denglu(){
        document.getElementsByTagName("input")[2].click();
    }
    setTimeout(denglu,500);
})();
