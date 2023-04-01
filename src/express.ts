import * as express from "express";
import { Application, Request, Response } from "express";

class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.router();
  }

  router() {
    this.app.get("/", (req: Request, res: Response) => {
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
