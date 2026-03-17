import * as userModel from '../models/userModel.js';
import bcrypt from 'bcrypt';

export const createUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const encryptPass = await bcrypt.hash(password, 10);
        const newUser = await userModel.createUser(name, email, encryptPass);

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
};
