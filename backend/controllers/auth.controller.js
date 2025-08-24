// POST api/v1/auth/login
const login =  (req, res) => {
    const { email, password } = req.body;
    // Perform login logic (e.g., check credentials)
    res.json({ message: 'Login successful' });
}

module.exports = {
    login
};
