import { createaccount, createuser } from './Utils/init';
// Main file in the SERVER 
import cors from "cors";
import express from "express";
import ErrorHandler from "./MiddleWare/route-not-found";
import config from "./Utils/config";
import dal_mysql from "./Utils/dal_mysql";
import router from './Routes/controller';

const server = express();
const currentPort = config.port;
dal_mysql.execute(createaccount);
dal_mysql.execute(createuser);
server.use(cors());
server.use(express.json());
// server.use("/devices", deviceController);
// server.use("/secnarios",secnarioController)
server.use("/exam4",router);
server.use("*", ErrorHandler);

server.listen(currentPort, () => {console.log(`listening on http://localhost:${currentPort}`)} )