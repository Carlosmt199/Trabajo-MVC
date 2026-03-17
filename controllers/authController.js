import * as authModel from '../models/userModel.js';

export const createUser = async (req, res) => {
    try {
        const data = req.body;
        const newUser = await authModel.createUser(data);

        res.status(200).json({
        message: 'User creado exitosamente',
        data: newUser
    });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear user",
            error: error.message
        });
    }
}