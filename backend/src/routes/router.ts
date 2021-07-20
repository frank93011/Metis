import MainRoute from "./baseRoute";
import UserRoutes from "./userRoute";
import ProductRoutes from "./productRoute";

const router: Array<MainRoute> = [
  new UserRoutes(),
  new ProductRoutes(),
];

export default router;