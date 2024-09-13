import { Sequelize } from "sequelize";
import db from "../utils/connection.js"
import Customer from "./CustomerModels.js";
import Order from "./OrderModels.js";
import Table from "./TableModels.js";
import Menu from "./MenuModels.js";
import Transaksi from "./TransaksiModels.js";
// import Transaksi from "./TransaksiModels.js";


await db.sync();
await Customer.sync()
await Order.sync()
await Table.sync()
await Menu.sync()
await Transaksi.sync()
// await Transaksi.sync()
// await Sequelize.sync({ force: true });  // Akan menghapus dan membuat ulang tabel