var car = /** @class */ (function () {
    function car() {
        this.speed = 50;
    }
    car.prototype.acc = function () {
        this.speed += 40;
    };
    car.prototype.checkspeed = function () {
        console.log("the speed is" + this.speed);
    };
    return car;
}());
var obj = new car;
obj.checkspeed();
obj.acc();
obj.checkspeed();
