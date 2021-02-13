abstract class Prototype {
  abstract clone(): Prototype;
}

class TeslaCar {
  model: string;
  price: number;
  interior: string;
  autopilot: boolean;

  constructor(source: {
    model: string;
    price: number;
    interior: string;
    autopilot: boolean;
  }) {
    this.model = source.model;
    this.price = source.price;
    this.interior = source.interior;
    this.autopilot = source.autopilot;
  }

  public clone(): TeslaCar {
    return new TeslaCar(this);
  }
}

export default class PrototypePattern {
  static clientCode() {
    const prototypeTesla = new TeslaCar({
      model: "S",
      price: 80000,
      interior: "black",
      autopilot: false,
    });

    console.log("|------Basic Tesla------|");
    console.log(prototypeTesla);

    const teslaXWhite = prototypeTesla.clone();

    teslaXWhite.model = "X";
    teslaXWhite.price = 100000;
    teslaXWhite.autopilot = true;

    console.log("|------Telsa X in white color with autopilot------|");
    console.log(teslaXWhite);

    const teslaXL = prototypeTesla.clone();

    teslaXL.model = "XL";
    teslaXL.price = 120000;
    teslaXL.interior = "red";

    console.log("|------Telsa XL in red color------|");
    console.log(teslaXL);

    const basicGreenTesla = prototypeTesla.clone();

    basicGreenTesla.interior = "green";

    console.log("|------Basic green Tesla------|");
    console.log(basicGreenTesla);
  }

  static run() {
    console.info("|-------------------------|");
    console.info("|--------Prototype--------|");
    console.info("|-------------------------|");
    PrototypePattern.clientCode();
  }
}
