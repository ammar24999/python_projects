function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var _b = options_1[_a], key = _b[0], value = _b[1];
        carInfo[key] = value;
    }
    return carInfo;
}
var car = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022], ["features", ["GPS", "Sunroof"]]);
console.log(car);
