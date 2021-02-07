interface Builder {
  setColor(color: string): void;
  setWheelNumbers(wheelsNumber: number): void;
  setDoorsNumber(doorsNumber: number): void;
  setCarBodyMaterial(material: string): void;
  setEngine(engine: string): void;
  setFourWheelDrive(isFourWheelDrive: boolean): void;
  setOpenTrunk(isOpenTrunk: boolean): void;
  setWeapons(weapons: boolean): void;
  setNitrousOxide(isNitrousOxide: boolean): void;
  setSpoiler(isSpoiler: boolean): void;
}

class Car {
  public car: any;

  public listInfo(): void {
    console.log(this.car);
  }
}

class CarBuilder implements Builder {
  private car: any;

  constructor() {
    this.reset();
    this.car = new Car();
  }

  public reset(): void {
    this.car = new Car();
  }

  public setColor(color: string): void {
    this.car.color = color;
  }

  public setWheelNumbers(wheelsNumber: number): void {
    this.car.wheelsNumber = wheelsNumber;
  }

  public setDoorsNumber(doorsNumber: number): void {
    this.car.doorsNumber = doorsNumber;
  }

  public setCarBodyMaterial(material: string): void {
    this.car.material = material;
  }

  public setEngine(engine: string): void {
    this.car.engine = engine;
  }

  public setFourWheelDrive(isFourWheelDrive: boolean): void {
    this.car.isFourWheelDrive = isFourWheelDrive;
  }

  public setOpenTrunk(isOpenTrunk: boolean): void {
    this.car.isOpenTrunk = isOpenTrunk;
  }

  public setWeapons(isWeapons: boolean): void {
    this.car.isWeapons = isWeapons;
  }

  public setNitrousOxide(isNitrousOxide: boolean): void {
    this.car.isNitrousOxide = isNitrousOxide;
  }

  public setSpoiler(isSpoiler: boolean): void {
    this.car.isSpoiler = isSpoiler;
  }

  public getCar(): Car {
    const result = this.car;
    this.reset();
    return result;
  }
}

class CarDirector {
  private builder: CarBuilder;

  public setBuilder(builder: CarBuilder): void {
    this.builder = builder;
  }

  public buildSimpleCar(): void {
    this.builder.setCarBodyMaterial("steel");
    this.builder.setDoorsNumber(5);
    this.builder.setColor("silver");
    this.builder.setSpoiler(false);
    this.builder.setEngine("1.6");
    this.builder.setWheelNumbers(4);
  }
  public buildSUVCar(): void {
    this.builder.setCarBodyMaterial("titan");
    this.builder.setDoorsNumber(8);
    this.builder.setColor("black");
    this.builder.setSpoiler(false);
    this.builder.setWeapons(true);
    this.builder.setOpenTrunk(true);
    this.builder.setEngine("5.2");
    this.builder.setWheelNumbers(8);
  }
  public buildSportCar(): void {
    this.builder.setCarBodyMaterial("carbon");
    this.builder.setDoorsNumber(3);
    this.builder.setColor("gold");
    this.builder.setSpoiler(true);
    this.builder.setEngine("6");
    this.builder.setNitrousOxide(true);
    this.builder.setWheelNumbers(4);
  }
}

export default class BuilderPattern {
  static clientCode(director: CarDirector): void {
    const builder = new CarBuilder();
    director.setBuilder(builder);
    console.log("------Simple Car------");
    director.buildSimpleCar();
    console.log(builder.getCar());
    console.log("------SUV Car------");
    director.buildSUVCar();
    console.log(builder.getCar());
    console.log("------Sport Car------");
    director.buildSportCar();
    console.log(builder.getCar());
  }

  static run(): void {
    console.info("|-------------------------|");
    console.info("|---------Builder---------|");
    console.info("|-------------------------|");
    this.clientCode(new CarDirector());
  }
}
