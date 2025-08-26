import axios from 'axios';

export const analyzeRepo = async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ msg: 'Repository URL is required' });
    }

    try {
    const urlParts = new URL(url);
    const pathParts = urlParts.pathname.split('/').filter(p => p);

    if (urlParts.hostname !== 'github.com' || pathParts.length < 2) {
        return res.status(400).json({ msg: 'Invalid GitHub repository URL' });
    }

    const [owner, repo] = pathParts;
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}`);

    res.json(response.data);
    } catch (error) {
        console.error(error.message);
        if (error.response && error.response.status === 404) {
            return res.status(404).json({ msg: 'Repository not found' });
        }
        res.status(500).send('Server Error');
    }
};

export const analyzeProfile = async (req, res) => {
    let { username } = req.body;
    if (!username) {
    return res.status(400).json({ msg: 'Username is required' });
    }

    if (username.includes('github.com')) {
    const urlParts = new URL(username);
    username = urlParts.pathname.split('/').filter(p => p)[0];
    }

    try {
    const [profileRes, reposRes] = await Promise.all([
        axios.get(`https://api.github.com/users/${username}`),
        axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=stargazers&direction=desc`)
    ]);

    const profileData = {
        ...profileRes.data,
        topRepos: reposRes.data
    };

    res.json(profileData);
    } catch (error) {
        console.error(error.message);
        if (error.response && error.response.status === 404) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.status(500).send('Server Error');
    }
};