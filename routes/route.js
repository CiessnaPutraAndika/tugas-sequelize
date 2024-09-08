import express from "express"
import { createCustomer, deleteCustomer, getAllCustomer, getCustomerById, updateCustomer } from "../controllers/customerController.js";
import { createOrder, deleteOrder, getAllOrder, getOrderById, updateOrder, } from "../controllers/orderController.js";
import { createTable, deleteTable, getAllTable, getTableById, updateTable } from "../controllers/tableController.js";
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

export default router;