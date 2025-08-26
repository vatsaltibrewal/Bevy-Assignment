import { Repository } from "../models/repository.model.js";

export const getAllRepositories = async (req, res) => {
    try {
        const results = await Repository.find();
        res.json(results);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};