class UserEntity {
    constructor(user) {
        this.user = user;
    }
    getEntity() {
        return this.user;
    }
}
class ProductEntity {
    constructor(product) {
        this.product = product;
    }
    getEntity() {
        return this.product;
    }
}
class DataCollection {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    printData() {
        this.data.forEach((item) => {
            if (item instanceof UserEntity || item instanceof ProductEntity) {
                console.log(item.getEntity());
            }
            else {
                console.log(item);
            }
        });
    }
}
const userCollection = new DataCollection();
userCollection.addItem(new UserEntity({ userName: "amk01" }));
userCollection.addItem(new UserEntity({ userName: "sara01" }));
userCollection.printData();
const productCollection = new DataCollection();
productCollection.addItem(new ProductEntity({ productName: "product #1" }));
productCollection.addItem(new ProductEntity({ productName: "product #2" }));
productCollection.printData();
const stringCollection = new DataCollection();
stringCollection.addItem("string #1");
stringCollection.addItem("string #2");
stringCollection.printData();
