abstract class Delivery {
  abstract type: string;
  abstract send(): boolean;
}

class SnapBox extends Delivery {
  type: string = "SnapBox";

  send(): boolean {
    return true;
  }
}

class Tipax extends Delivery {
  type: string = "Tipax";

  send(): boolean {
    return true;
  }
}
