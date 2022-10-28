require("dotenv").config();
const http = require("http");
const app = require("./app/app");
const dbConnection = require("./services/dbConnection");

const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

dbConnection();

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
