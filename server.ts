import app from "./src/app";
import { envConfig } from "./src/config/config";

function startServer() {
  const PORT = envConfig.PORT || 4000;
  app.listen(PORT, () => {
    console.log("Server has started at port[${PORT}]");
  });
}
startServer();
