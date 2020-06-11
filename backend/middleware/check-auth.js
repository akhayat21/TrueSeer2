const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, '2efbnm3598fn13fb0824f10ig2');
        next();
    } catch (error) {
        res.status(401).json({ message: "Auth failed!" });
    }
}