const db = require('../db'); 
const Admin = db.Admin; // ✅ Explicitly get the Admin model

async function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (!username || !password) {
        return res.status(400).json({ "msg": "Missing username or password in headers" });
    }

    const response = await Admin.findOne({ username, password });

    if (response) {
        next();
    } else {
        res.status(403).json({ "msg": "Admin doesn't exist" });
    }
}

module.exports = adminMiddleware;
