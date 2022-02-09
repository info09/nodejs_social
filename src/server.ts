import { validateEnv } from "./core/utils";
import "dotenv/config";
import App from "./app";
import { IndexRoute } from "./modules/index";

validateEnv();

const routes = [new IndexRoute()];
const app = new App(routes);

app.listen();
