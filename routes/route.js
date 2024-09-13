import express from "express"
import { createCustomer, deleteCustomer, getAllCustomer, getCustomerById, updateCustomer } from "../controllers/customerController.js";
import { createOrder, deleteOrder, getAllOrder, getOrderById, updateOrder, } from "../controllers/orderController.js";
import { createTable, deleteTable, getAllTable, getTableById, updateTable } from "../controllers/tableController.js";
import { createMenu, deleteMenu, getAllMenu, getMenuById, updateMenu } from "../controllers/menuController.js";
import { createTransaksi, deleteTransaksi, getAllTransaksi, getTransaksiById, updateTransaksi } from "../controllers/transaksiController.js";
const router = express.Router();

// CUSTOMER
router.get("/customer", getAllCustomer)
router.get("/customer/find/:id", getCustomerById)
router.post("/customer/create", createCustomer)
router.put('/customer/update/:id', updateCustomer);
router.delete("/customer/delete/:id", deleteCustomer)

// ORDER
router.get("/order", getAllOrder)
router.get("/order/find/:id", getOrderById)
router.post("/order/create", createOrder)
router.put('/order/update/:id', updateOrder);
router.delete("/order/delete/:id", deleteOrder)

router.get("/table", getAllTable)
router.get("/table/find/:id", getTableById)
router.post("/table/create", createTable)
router.delete("/table/delete/:id", deleteTable)
router.put("/table/update/:id",updateTable)

router.get("/menu", getAllMenu)
router.get("/menu/find/:id", getMenuById)
router.post("/menu/create", createMenu)
router.delete("/menu/delete/:id", deleteMenu)
router.put("/menu/update/:id",updateMenu)

router.get("/transaksi", getAllTransaksi)
router.get("/transaksi/find/:id", getTransaksiById)
router.post("/transaksi/create", createTransaksi)
router.delete("/transaksi/delete/:id", deleteTransaksi)
router.put("/transaksi/update/:id",updateTransaksi)

export default router;