import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

// Definisikan model Order
const Order = db.define(
    "Order", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        order_makanan: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        order_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW, 
        },
        total_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, 
    {
        tableName: "order",
        timestamps: true,
    }
);

export default Order;
