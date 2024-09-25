import Customer from "../models/CustomerModels.js";
import Order from "../models/OrderModels.js";
import Table from "../models/TableModels.js";

export const getAllOrder = async (req, res) => {
    try{
        const orders = await Order.findAll({
            include: [
                {
                    model: Customer,
                    as: "Customer"
                },
                {
                    model: Table,
                    as: "Table",
                },
            ],
        });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message, message: "seluruh data order tidak terambil" });
    }
}

export const getOrderById = async (req, res) => {
    try{
        const { id } = req.params;
        const order = await Order.findByPk(id, {
            include: [
                {
                    model: Customer,
                    as: "Customer"
                },
                {
                    model: Table,
                    as: "Table",
                },
            ],
        });
        if (!order) {
            return res.status(404).json({ message: "id order tidak ditemukan" });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message, message: "data order tidak terambil" });
    }
}

export const createOrder = async (req, res) => {
    try{
        const { status, CustomerId, TableId } = req.body;
        const ordered = await Order.create({status, CustomerId:CustomerId, TableId : TableId});
        res.status(200).json(ordered);
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal membuat createOrder"})
    }
}

export const updateOrder = async (req, res) => {
    try{
        const { id } = req.params;
        const { status, TableId, CustomerId } = req.body;
        const [updated] = await Order.update({ status, TableId: TableId, CustomerId: CustomerId }, { where: { id } });
        const updatedOrder = await Order.findByPk(id);        
        if (updated === 0){
            res.status(404).json({error: error.message, message: "order tidak ter-update"})
        }else{
            res.status(200).json(updatedOrder);
        }
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal mengupdate order"})
    }
}

export const deleteOrder = async (req, res) => {
    try{
        const {id} = req.params;
        const deleted = await Order.destroy({where: {id}});
        res.status(200).json(deleted + ` order berhasil terhapus`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus order"})
    }
}