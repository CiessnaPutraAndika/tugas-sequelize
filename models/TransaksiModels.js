import { DataTypes } from "sequelize";
import db from "../utils/connection.js"

const Transaksi = db.define(
    // memberikan nama models dengan nama User secara default, jika tidak memberikan tablename maka akan menjadi nama jamak
    "Transaksi", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        total_harga: {
            type: DataTypes.INTEGER,
            allowNull: false,        
        },
        pembayaran: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, 
    {
        tableName: "transaksi"
    }
);


export default Transaksi;