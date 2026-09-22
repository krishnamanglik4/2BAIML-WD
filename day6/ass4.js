class Product {
    constructor(pid, pname, price) {
        this.productid = pid;
        this.productname = pname;
        this.price = price;
    }
    getDiscountedPrice(dis) {
        this.price = this.price - (this.price * dis) / 100;
        console.log("Final amount:", this.price);
    }

    static compareProducts(p1, p2) {
        if (p1.price > p2.price) {
            console.log("P1 is Higher");
        } 
        else if (p2.price > p1.price) {
            console.log("P2 is Higher");
        }
        else {
            console.log("Both prices are equal");
        }
    }

    display() {
        console.log("Product ID:", this.productid);
        console.log("Product Name:", this.productname);
        console.log("Price:", this.price);
    }
}

class Electronics extends Product {

    constructor(pid, pname, price, warranty) {
        super(pid, pname, price);
        this.warranty = warranty;
    }

    display() {
        super.display();
        console.log("Warranty:", this.warranty);
    }
}

let p1 = new Product(101, "Shoes", 2000);
let p2 = new Product(102, "Watch", 3500);

p1.display();
p2.display();

p1.getDiscountedPrice(10);

Product.compareProducts(p1, p2);

let e1 = new Electronics(103, "Laptop", 60000, "2 Years");
e1.display();
e1.getDiscountedPrice(15);