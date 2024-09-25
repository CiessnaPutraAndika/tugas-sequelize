import Customer from "../models/CustomerModels.js";
import Table from "../models/TableModels.js";

export const createTable = async (req, res) => {
    try{
        const { number_table, capacity, location_table, CustomerId } = req.body;
        const meja = await Table.create({number_table, capacity, location_table, CustomerId: CustomerId});
        res.status(200).json(meja);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createTable"})
    }
}

export const getAllTable = async (req, res) => {
    try{
        const meja = await Table.findAll({
            include: [
                {
                    model: Customer,
                    as: "Customer",
                },
            ]
        });
        res.status(200).json(meja);
    } catch (error) {
        res.status(500).json({ error: error.message, message: "seluruh data table tidak terambil" });
    }
}

export const getTableById = async (req, res) => {
    try{
        const { id } = req.params;
        const meja = await Table.findByPk(id, {
            include: [
                {
                    model: Customer,
                    as: "Customer",
                },
            ]
        });
        if (!meja) {
            return res.status(404).json({ message: "id table tidak ditemukan" });
        }
        res.status(200).json(meja);
    } catch (error) {
        res.status(500).json({ error: error.message, message: "data table tidak terambil" });
    }
}

export const deleteTable = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Table.destroy({where: {id}});
        res.status(200).json(deleted + ` table ke ${id} berhasil terhapus`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus table"})
    }
}

export const updateTable = async (req, res) => {
    try{
        const { id } = req.params;
        const { number_table, capacity, location_table, CustomerId } = req.body;
        const [updated] = await Table.update({ number_table, capacity, location_table, CustomerId: CustomerId }, { where: { id } });
        const updatedTable = await Table.findByPk(id);
        // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
        if (updated === 0){
            res.status(404).json({error: error.message, message: "customer tidak ter-update"})
        }else{
            res.status(200).json(updatedTable);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate customer"})
    }
}