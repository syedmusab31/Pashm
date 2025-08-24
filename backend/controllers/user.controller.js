const {User} = require("../models")
const bcrypt = require("bcryptjs")

// PUT api/v1/user/update
const Update = async (req, res) => {
    const { name, password } = req.body;
    try {
        if (!name && !password) {
            return res.status(400).json({success:false, message: "At least one field is required" });
        }
        const user = await User.findById(req.user._id);
        if (password && password.length < 8) {
            return res.status(400).json({success:false, message: "Password must be at least 8 characters long" });
        }
        user.name = name || user.name;
        user.email = email || user.email;
        user.password = password ? await bcrypt.hash(password, 10) : user.password;
        await user.save();
        res.status(200).json({success:true, message: "User updated successfully" });
    } catch (error) {
        res.status(500).json({success:false, message: error.message });
    }
}