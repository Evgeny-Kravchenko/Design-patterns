interface Button {
  onClick: () => void;
}

interface Select {
  getOptions: () => void;
  options: Array<string>;
}

interface ElementsFactory {
  createButton(): Button;
  createSelect(): Select;
}

class HTMLElements implements ElementsFactory {
  createButton(): Button {
    return new HTMLButton();
  }
  createSelect(): Select {
    return new HTMLSelect(["1", "2"]);
  }
}

class WindowsElements implements ElementsFactory {
  createButton(): Button {
    return new WindowsButton();
  }
  createSelect(): Select {
    return new WindowsSelect(["3", "4"]);
  }
}

class HTMLButton implements Button {
  public onClick() {
    console.log("I'm HTML Button");
  }
}

class WindowsButton implements Button {
  public onClick() {
    console.log("I'm Windows Button");
  }
}

class HTMLSelect implements Select {
  readonly options: Array<string>;
  constructor(options: Array<string>) {
    this.options = options;
  }

  public getOptions(): void {
    console.log(
      `I'm HTML Select and these are my options ${this.options.join(",")}`
    );
  }
}

class WindowsSelect implements Select {
  readonly options: Array<string>;
  constructor(options: Array<string>) {
    this.options = options;
  }

  public getOptions(): void {
    console.log(
      `I'm HTML Windows and these are my options ${this.options.join(",")}`
    );
  }
}

export default class AbstractFactory {
  static clientCode(factory: ElementsFactory) {
    const button = factory.createButton();
    const select = factory.createSelect();
    button.onClick();
    select.getOptions();
  }
  static run() {
    console.info("|-------------------------|");
    console.info("|----Abstract factory-----|");
    console.info("|-------------------------|");
    console.info("|------HTML Elements------|");
    this.clientCode(new HTMLElements());
    console.info("|-----Windows Elements----|");
    this.clientCode(new WindowsElements());
  }
}
