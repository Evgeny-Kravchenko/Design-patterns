interface Product {
  operation(): string;
}

abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();
    return product.operation();
  }
}

class HTMLButton implements Product {
  operation() {
    return "I am an HTML Button";
  }
}

class AndroidButton implements Product {
  operation(): string {
    return "I am an Android Button";
  }
}

class HTMLButtonCreator extends Creator {
  public factoryMethod(): Product {
    return new HTMLButton();
  }
}

class AndroidButtonCreator extends Creator {
  public factoryMethod(): Product {
    return new AndroidButton();
  }
}

export default class FactoryMethod {
  static clientCode(creator: Creator) {
    console.log(creator.someOperation());
  }
  static run() {
    console.info("|-------------------------|");
    console.info("|-----Factory method------|");
    console.info("|-------------------------|");
    console.info(
      "I am client and I don't know what product exactly I use, but I know that it has operation method"
    );
    FactoryMethod.clientCode(new HTMLButtonCreator());
    FactoryMethod.clientCode(new AndroidButtonCreator());
  }
}
