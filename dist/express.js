"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.app = express();
        this.router();
    }
    router() {
        this.app.get("/", (req, res) => {
            res.send({ typescript: true });
        });
    }
    run() {
        this.app.listen(5000, () => {
            console.log("app is running ...");
        });
    }
}
const sampleApp = new App();
sampleApp.run();
