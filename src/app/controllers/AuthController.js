const User  = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const hash = require('../../config/auth');

class AuthController {
    async login(req, res) {
        const { email, password } = req.body;
        const payload = { email };
        try {
            if(!email || !password) {
                return res.json({ success: false, message: 'Invalid email or password.', statusCode: 400 });
            }
            
            const user = await User.findOne({ where: { email }});

            if(!user) {
                return res.json({ success: false, message: 'Email does not exist.', statusCode: 400 });
            }
            
            if(!bcrypt.compareSync(password, user.password)) {
                return res.json({ success: false, message: 'Incorrect password.', statusCode: 400 });
            }
            
            const accessToken = jwt.sign(payload, hash.secret, { expiresIn: '1d' });

            return res.json({ auth: true, token: accessToken, statusCode: 200 });
        } catch(err) {
            return res.json({ success: false, message: 'Login error.', statusCode: 400 });
        }
    }

    logout(req, res){
        return res.json({ auth: false, token: null, statusCode: 200 });
    }
}

module.exports = new AuthController();