import * as teamModel from '../models/teamModel.js';

export const getTeams = async (req, res) => {
    const teams = await teamModel.getTeams();

    res.json(teams);
};

export const createTeams = async (req, res) => {
    try {
        const data = req.body;
        const newTeam = await teamModel.createTeams(data);

        res.status(200).json({
        message: 'Team creado exitosamente',
        data: newTeam
    });
    } catch (error) {
        res.status(500).json({
            message: "Error al crear team",
            error: error.message
        });
    }
};
