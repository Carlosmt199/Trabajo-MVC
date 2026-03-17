import * as taskModel from '../models/taskModel.js';

export const getTask = async (req, res) => {
    const tasks = await taskModel.getTask();

    res.json(tasks);
};

export const createTask = async (req, res) => {
    try {
        const data = req.body;
        const newTask = await taskModel.createTask(data);

        res.status(200).json({
        message: 'Task creado exitosamente',
        data: newTask
    });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear task",
            error: error.message
        });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedTask = await taskModel.updateTask(id, data)

        res.status(200).json({
            message: 'Task actualizado',
            data: updatedTask
        })
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar task",
            error: error.message
        });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await taskModel.deleteTask(id);

        res.status(200).json({
            message: 'Task eliminado',
            taskId: id
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error al eliminar task',
            error: error.message
        });
    }
};
