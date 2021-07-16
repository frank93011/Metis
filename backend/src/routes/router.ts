import MainRoute from "./baseRoute";
import UserRoutes from "./user";

const router: Array<MainRoute> = [
  new UserRoutes(),
];

export default router;