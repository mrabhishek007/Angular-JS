var app = angular.module("CaptchaApp",[]);

app.factory("CaptchaFactory", function () {
    var factory ={};
    factory.generateCaptcha = function () {
        var a = Math.random()*10;   /* Math.random() returns value between 0 -1 */
        var b = Math.random()*10;
        var c = Math.random()*10;
        var d = Math.random()*10;
        var e = Math.random()*10;
        var code = Math.round(a) + " " + Math.round(b) + " " +  Math.round(c) + " " + Math.round(d) + " " + Math.round(e);
        code = code.slice(0,9)
        return code;
    }
  return factory;
});

app.service("CaptchaService", function (CaptchaFactory) {
    this.captcha = function () {
        return CaptchaFactory.generateCaptcha();
    }
});

