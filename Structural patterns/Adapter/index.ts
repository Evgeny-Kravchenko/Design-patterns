interface IBackEndService {
  makeSpecificRequest(): string;
}

class BackendService implements IBackEndService {
  static readonly url = "http://111.111.112.3";

  public makeSpecificRequest(): string {
    return "Some specific data from the server";
  }
}

interface IBackEndClientService {
  get(): object;
  put(): boolean;
  post(): boolean;
  delete(): boolean;
}

class BackEndClientService implements IBackEndClientService {
  public get(): object {
    return { data: "Standard get request" };
  }
  public post(): boolean {
    console.log("Saving passed successful");
    return true;
  }
  public put(): boolean {
    console.log("Updating hasn't passed successful");
    return false;
  }
  public delete(): boolean {
    console.log("Deleting has passed successful");
    return true;
  }
}

class BackEndServiceAdapter extends BackEndClientService {
  private adaptee: BackendService;
  constructor(adaptee: BackendService) {
    super();
    this.adaptee = adaptee;
  }

  public get(): object {
    return { data: this.adaptee.makeSpecificRequest() };
  }
}

export default class Adapter {
  static clientCode(service: IBackEndClientService): void {
    console.log(service.get());
  }

  static run(): void {
    const backEndClientService = new BackEndClientService();
    console.log("Standard behaviour of the backend-client service");
    Adapter.clientCode(backEndClientService);
    const backendAdapter = new BackEndServiceAdapter(new BackendService());
    console.log("Adapted behaviour of the backend-client service");
    Adapter.clientCode(backendAdapter);
  }
}
