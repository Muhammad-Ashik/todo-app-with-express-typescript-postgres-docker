import express from "express";
import todos from "./todoRoute";

const router = express.Router();

const allRoutes = [
  {
    path: "/todos",
    route: todos
  },
]

allRoutes.forEach(route => {
  router.use(route.path, route.route);
})

export default router;