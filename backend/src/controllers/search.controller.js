import { Repository } from "../models/repository.model.js";
import axios from "axios";

export const searchRepository = async(req, res) => {
    const { keyword } = req.body;

    if (!keyword) {
        return res.status(400).json({ msg: 'Keyword is required' });
    }

    try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${keyword}`);
    const repositories = response.data.items;

    const repositoriesToSave = repositories.map(repo => ({
        name: repo.name,
        url: repo.html_url,
        description: repo.description,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
    }));

    await Repository.deleteMany({});
    await Repository.insertMany(repositoriesToSave);

    res.status(201).json({ msg: 'Repositories saved successfully' });
    } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
    }
};