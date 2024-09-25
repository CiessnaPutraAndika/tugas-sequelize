import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Menu = db.define (
    "Menu",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        menu_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        harga: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gambar: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "menu"
    }
)

export default Menu