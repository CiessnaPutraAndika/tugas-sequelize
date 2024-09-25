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

Customer.hasMany(Menu, {
    foreignKey: "CustomerId",  // Foreign key in Customer refers to Menu
    as: "Menu",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Menu.belongsTo(Customer, {
    foreignKey: "CustomerId",  // Foreign key in Customer refers to Menu
    as: "Customer",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});


// CUSTOMER CAN ONLY HAVE ONE TABLE (One-to-One)
Customer.hasOne(Table, {
    foreignKey: "CustomerId",  // Foreign key in Table refers to Customer
    as: "Table",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

// TABLE CAN ONLY BE LINKED TO ONE CUSTOMER (One-to-One)
Table.belongsTo(Customer, {
    foreignKey: "CustomerId",  // Foreign key in Table
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

Order.hasMany(Menu, {
    foreignKey: "OrderId",  // Foreign key in Order refers to Menu
    as: "Menu",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

Menu.belongsTo(Order, {
    foreignKey: "OrderId",  // Foreign key in Order refers to Menu
    as: "Order",
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

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

// Transaksi.hasMany(Menu, {
//     foreignKey: "TransaksiId",  // Foreign key in Transaksi refers to Menu
//     as: "Menu",
//     onDelete: "CASCADE",
//     onUpdate: "CASCADE",
// });

// // MENU CAN HAVE MANY TRANSAKSI (Optional: One-to-Many if you want multiple transactions for one menu)
// Menu.belongsTo(Transaksi, {
//     foreignKey: "TransaksiId",  // Foreign key in Transaksi refers to Menu
//     as: "Transaksi",
//     onDelete: "CASCADE",
//     onUpdate: "CASCADE",
// });



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