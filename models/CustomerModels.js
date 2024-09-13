import { DataTypes } from "sequelize";
import db from "../utils/connection.js"
import Order from "./OrderModels.js";
import Table from "./TableModels.js";
import Menu from "./MenuModels.js";
import Transaksi from "./TransaksiModels.js";

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

// CUSTOMER CAN HAVE MANY MENUS (Change or clarify if this is a valid relationship)
Customer.belongsTo(Menu, {
    foreignKey: "MenuId",  // Foreign key in Customer refers to Menu
    as: "Menu",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

// MENU CAN HAVE MANY CUSTOMERS (One-to-Many)
Menu.hasMany(Customer, {
    foreignKey: "MenuId",  // Foreign key in Customer refers to Menu
    as: "Customer",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});



// CUSTOMER CAN ONLY HAVE ONE TABLE (One-to-One)
Customer.belongsTo(Table, {
    foreignKey: "TableId",  // Foreign key in Table refers to Customer
    as: "Table",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

// TABLE CAN ONLY BE LINKED TO ONE CUSTOMER (One-to-One)
Table.hasOne(Customer, {
    foreignKey: "TableId",  // Foreign key in Table
    as: "Customer",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

// CUSTOMER CAN PLACE MANY ORDERS (One-to-Many)
Customer.hasMany(Order, {
    foreignKey: "CustomerId",  // Foreign key in Order refers to Customer
    as: "Order",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

// ORDER IS PLACED BY ONE CUSTOMER
Order.belongsTo(Customer, {
    foreignKey: "CustomerId",  // Foreign key in Order
    as: "Customer",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

// ORDER CAN HAVE MANY MENUS (Many-to-Many, through another table is better, but following your pattern)
Order.belongsTo(Menu, {
    foreignKey: "MenuId",  // Foreign key in Order refers to Menu
    as: "Menu",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

// MENU CAN HAVE MANY ORDERS (One-to-Many)
Menu.hasMany(Order, {
    foreignKey: "MenuId",  // Foreign key in Order refers to Menu
    as: "Order",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

// CUSTOMER HAS ONE TRANSACTION (One-to-One)
Customer.hasOne(Transaksi, {
    foreignKey: "CustomerId",  // Foreign key in Transaksi refers to Customer
    as: "Transaksi",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Transaksi.belongsTo(Customer, {
    foreignKey: "CustomerId",  // Foreign key in Transaksi
    as: "Customer",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

// TRANSACTION CAN INCLUDE MANY MENUS
// TRANSAKSI BELONGS TO ONE MENU
Transaksi.belongsTo(Menu, {
    foreignKey: "MenuId",  // Foreign key in Transaksi refers to Menu
    as: "Menu",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

// MENU CAN HAVE MANY TRANSAKSI (Optional: One-to-Many if you want multiple transactions for one menu)
Menu.hasMany(Transaksi, {
    foreignKey: "MenuId",  // Foreign key in Transaksi refers to Menu
    as: "Transaksi",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});


// ORDER IS RELATED TO ONE TABLE (Many-to-One)
Order.belongsTo(Table, {
    foreignKey: "TableId",  // Foreign key in Order refers to Table
    as: "Table",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

// TABLE HAS MANY ORDERS (One-to-Many)
Table.hasMany(Order, {
    foreignKey: "TableId",  // Foreign key in Order refers to Table
    as: "Order",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});


export default Customer;