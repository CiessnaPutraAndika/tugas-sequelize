import Customer from "../models/CustomerModels.js";
import Menu from "../models/MenuModels.js";
import Table from "../models/TableModels.js";

export const getAllCustomer = async (req, res) => {
    try{
        const customer = await Customer.findAll({
            include: [
                {
                    model: Menu,
                    as: "Menu",
                },
                {
                    model: Table,
                    as: "Table",
                },
            ],
        });
        res.status(200).json(customer)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllCustomer"})
    }
};

export const getCustomerById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const customer = await Customer.findByPk(id, {
            include: [
                {
                    model: Menu,
                    as: "Menu",
                },
                {
                    model: Table,
                    as: "Table",
                },
            ],
        }); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!customer) {
            return res.status(404).json({ message: "Customer tidak ditemukan" });
        }
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};

export const createCustomer = async (req, res) => {
    try{
        const { name, MenuId, TableId } = req.body;
        const customer = await Customer.create({name, MenuId: MenuId, TableId: TableId});
        res.status(200).json(customer);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createCustomer"})
    }
}

export const updateCustomer = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, MenuId, TableId } = req.body;
        const [updated] = await Customer.update({ name, MenuId: MenuId, TableId: TableId }, { where: { id } });
        const updatedCustomer = await Customer.findByPk(id);
        // JIKA TIDAK ADA YANG TERUPDATE MAKA AKAN ERROR
        if (updated === 0){
            res.status(404).json({error: error.message, message: "customer tidak ter-update"})
        }else{
            res.status(200).json(updatedCustomer);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate customer"})
    }
}

export const deleteCustomer = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Customer.destroy({where: {id}});
        res.status(200).json(deleted + ` customer ke ${id} berhasil diusir`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus customer"})
    }
}