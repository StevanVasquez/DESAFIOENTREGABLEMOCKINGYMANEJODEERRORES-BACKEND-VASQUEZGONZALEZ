import express from "express";
import displayRoutes from "express-routemap";
import { PORT } from "./config/config.js";
import productRoutes from "./routes/product.routes.js";
import testRoutes from "./routes/test.routes.js";
import errorHandlerGlobal from "./middlewares/error-handler-global.js";

const app = express();
const PORT_APP = PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productRoutes);
app.use("/api/mockingproducts", testRoutes);
app.use(errorHandlerGlobal);
app.listen(PORT_APP, () => {
    displayRoutes(app);
    console.log(`Listening on PORT: ${PORT_APP}`);
});