class UserEntity {
  private user: object;
  constructor(user: object) {
    this.user = user;
  }
  public getEntity() {
    return this.user;
  }
}
class ProductEntity {
  private product: object;
  constructor(product: object) {
    this.product = product;
  }
  public getEntity() {
    return this.product;
  }
}

class DataCollection<T> {
  private data: T[] = [];

  public addItem(item: T) {
    this.data.push(item);
  }
  public printData() {
    this.data.forEach((item: T) => {
      if (item instanceof UserEntity || item instanceof ProductEntity) {
        console.log(item.getEntity());
      } else {
        console.log(item);
      }
    });
  }
}

const userCollection = new DataCollection<UserEntity>();
userCollection.addItem(new UserEntity({ userName: "amk01" }));
userCollection.addItem(new UserEntity({ userName: "sara01" }));
userCollection.printData();

const productCollection = new DataCollection<ProductEntity>();
productCollection.addItem(new ProductEntity({ productName: "product #1" }));
productCollection.addItem(new ProductEntity({ productName: "product #2" }));
productCollection.printData();

const stringCollection = new DataCollection<String>();
stringCollection.addItem("string #1");
stringCollection.addItem("string #2");
stringCollection.printData();
