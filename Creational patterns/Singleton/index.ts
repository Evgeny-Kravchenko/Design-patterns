class Singleton {
  static instance: Singleton;
  private constructor() {
    console.log("Create instance");
  }

  public static getInstance(): Singleton {
    if (Singleton.instance) {
      return Singleton.instance;
    } else {
      Singleton.instance = new Singleton();
      return Singleton.instance;
    }
  }
}

export default class SingletonPattern {
  private static clientCode(): void {
    console.log(
      "Call Singleton the first time and as a result console.log works in constructor"
    );
    const obj1 = Singleton.getInstance();
    console.log(
      "Call Singleton the second time and as a result console.log doesn't work in constructor"
    );
    const obj2 = Singleton.getInstance();
    console.log("Is the obj1 the same as the obj2?", obj1 === obj2);
  }

  static run(): void {
    console.info("|-------------------------|");
    console.info("|--------Singleton--------|");
    console.info("|-------------------------|");
    SingletonPattern.clientCode();
  }
}
