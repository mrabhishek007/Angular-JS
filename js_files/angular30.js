var app = angular.module("FactoryApp",[]);

app.factory("MathFactory",function () {
    var factory={};
    factory.totalAmount = function (qty, price) {
        return (qty * price) ;
    }
    factory.maxvalue = function (...values) {  //spread operator (similar functionality as by passing value1,value2,value3)
        return Math.max(...values);
    };
    return factory;
});

app.factory("StringFactory",function () {
    var factory = {};
    factory.changeCase = function(str){
        return str.toUpperCase();
    };
    return factory;
});