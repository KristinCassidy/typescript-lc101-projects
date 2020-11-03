import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';


export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[]): number {
        //returns the sum of all items using each item's massKg property
        let sum = 0
        for (let item of items) {
            sum += item.massKg;
        }
        return sum;
    }

    currentMassKg(): number {
        //uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
       return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    }

    canAdd( item: Payload ): boolean {
        //returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        let totalMass = this.currentMassKg() + item.massKg
        return totalMass <= this.totalCapacityKg;
    }

    addCargo( cargo: Cargo ): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut( astronaut: Astronaut ): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}