const JWT = require ("jsonwebtoken")
exports.authenticateUser = async(req, res, next) => {
    const token = req.cookies.token || null
    if(!token) return
    res.status(404).send({
        msg: "User authentication failed", token: req.cookies })
        try {
            const payload = JWT.verify(token, process.env.SECRET);
            req.user = { id: payload.id, username: payload.username };
            next()
        } catch (e) {
            return res.status(400).jswon({
                success: false,
                message: e.message
            });
        }
}