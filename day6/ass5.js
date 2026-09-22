class Vehicle {

    constructor(Vno, Dname, Di) {
        this.VehicleNo = Vno;
        this.DriverName = Dname;
        this.Distance = Di;
    }

    CalculateFair() {
        return 0;
    }

    static PlatformName() {
        console.log("Booking Platform: QuickCab");
    }
}


class Car extends Vehicle {

    constructor(Vno, Dname, Di) {
        super(Vno, Dname, Di);
    }

    CalculateFair() {
        this.Fair = this.Distance * 15;
        console.log("Car Fare:", this.Fair);
    }
}


class Bike extends Vehicle {

    constructor(Vno, Dname, Di) {
        super(Vno, Dname, Di);
    }

    CalculateFair() {
        this.Fair = this.Distance * 8;
        console.log("Bike Fare:", this.Fair);
    }
}
Vehicle.PlatformName();

let car = new Car("C101", "Rahul", 20);
let bike = new Bike("B101", "Amit", 15);

car.CalculateFair();
bike.CalculateFair();