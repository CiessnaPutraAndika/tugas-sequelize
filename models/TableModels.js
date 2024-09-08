import { DataTypes } from "sequelize";
import db from "../utils/connection.js"

const Table = db.define(
    // memberikan nama models dengan nama User secara default, jika tidak memberikan tablename maka akan menjadi nama jamak
    "Table", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,

        },
        number_table: {
            type: DataTypes.STRING,
            allowNull: false,        
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        location_table: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, 
    {
        tableName: "table"
    }
);


export default Table;