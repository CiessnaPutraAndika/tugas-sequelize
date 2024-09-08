import { DataTypes } from "sequelize";
import db from "../utils/connection.js"
import Order from "./OrderModels.js";
import Table from "./TableModels.js";

const Customer = db.define(
    // memberikan nama models dengan nama User secara default, jika tidak memberikan tablename maka akan menjadi nama jamak
    "Customer", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,        
        },
        reservation_time: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW, // untuk saat create data, date akan otomatis mengikuti date saat create
        },
    }, 
    {
        tableName: "customer",
        timestamps: true, // Ini akan menambahkan date secara otomatis resevation_time, createdAt dan updatedAt
    }
);

// RELASI

// CUSTOMER HANYA BISA MEMILIKI 1 MEJA (One-to-One)
Customer.hasOne(Table, {
    foreignKey: "CustomerId",  // Menggunakan UserId sebagai foreignKey 
    as: "Table",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

// TABLE HANYA BISA TERKAIT DENGAN SATU CUSTOMER
Table.belongsTo(Customer, {
    foreignKey: "CustomerId",  // Pastikan UserId sebagai foreignKey
    as: "Customer",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

// CUSTOMER BISA MEMESAN BANYAK ORDER (One-to-Many)
Customer.hasMany(Order, {
    foreignKey: "CustomerId",  // Gunakan UserId
    as: "Order",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

// ORDER DIPESAN OLEH SATU CUSTOMER
Order.belongsTo(Customer, {
    foreignKey: "CustomerId",  // Gunakan UserId
    as: "Customer",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

// ORDER TERKAIT DENGAN SATU MEJA (Many-to-One)
Order.belongsTo(Table, {
    foreignKey: "TableId",  // Gunakan TableId
    as: "Table",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

// TABLE MEMILIKI BANYAK ORDER (One-to-Many)
Table.hasMany(Order, {
    foreignKey: "TableId",  // Gunakan TableId
    as: "Order",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

export default Customer;