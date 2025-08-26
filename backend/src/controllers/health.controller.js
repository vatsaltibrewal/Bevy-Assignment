export const healthCheck = (req, res) => {
    res.status(200).json({ msg: 'API is running', timestamp: new Date().toISOString() });
};