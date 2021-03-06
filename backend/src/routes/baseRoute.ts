import { Router } from "express";

abstract class MainRoute {
  private path = '';
  protected router = Router();
  protected abstract setRoutes(): void;

  public getPrefix() {
    return this.path;
  }

  public getRouter() {
    return this.router;
  }

}

export default MainRoute;