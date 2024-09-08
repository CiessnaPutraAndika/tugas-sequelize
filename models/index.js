import { Sequelize } from "sequelize";
import db from "../utils/connection.js"
import Customer from "./CustomerModels.js";
import Order from "./OrderModels.js";
import Table from "./TableModels.js";

await db.sync();
// await Sequelize.sync({ force: true });  // Akan menghapus dan membuat ulang tabel