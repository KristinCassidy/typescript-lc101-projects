"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        //returns the sum of all items using each item's massKg property
        var sum = 0;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            sum += item.massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        //uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };
    Rocket.prototype.canAdd = function (item) {
        //returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        var totalMass = this.currentMassKg() + item.massKg;
        return totalMass <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
