class Delivery {
}
class SnapBox extends Delivery {
    constructor() {
        super(...arguments);
        this.type = "SnapBox";
    }
    send() {
        return true;
    }
}
class Tipax extends Delivery {
    constructor() {
        super(...arguments);
        this.type = "Tipax";
    }
    send() {
        return true;
    }
}
