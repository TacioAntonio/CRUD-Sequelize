const User = require('../models/user');

class UserController {
    async collectAll(req, res) {
        try{
            const users = await User.findAll();

            for(let user of users) {
                user.password = undefined;
            }

            return res.json(users);
        } catch(err) {
            return res.json({ success: false, message: 'Collect users fail', statusCode: 400 });
        }
    }

    async collectByPk(req, res) {
        const { id } = req.params;

        try {
            const user = await User.findByPk(id);

            if(!user) {
                return res.json({ success: false, message: 'Collect user fail', statusCode: 400 })
            }

            user.password = undefined;

            return res.json(user);
        } catch(err) {
            return res.json({ success: false, message: 'Collect user fail', statusCode: 400 });
        }
    }

    async insert(req, res) {
        const { username, email, password } = req.body;

        try {
            if(await User.findOne({ where: { email } })) {
                return res.json({ success: false, message: 'User already exists.', statusCode: 400 })
            }

            if(!username || !email || !password) {
                return res.json({ success: false, message: 'Registration failed.', statusCode: 400 });
            }

            const user = await User.create({ username, email, password });

            user.password = undefined;

            return res.json({ success: true, message: 'The user has been successfully inserted.', statusCode: 200 });
        } catch(err) {
            return res.json({ success: false, message: 'Registration failed.', statusCode: 400 });
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const { username, password } = req.body;

        try {
            const user = await User.findByPk(id);

            if(!user) {
                return res.json({ success: false, message: 'User does not exists.', statusCode: 400 });
            }

            await user.update({ username }, { where: { id, password } });

            user.password = undefined;

            return res.json({ success: true, message: 'Update successfully.', statusCode: 200 });
        } catch(err) {
            return res.json({ success: false, message: 'Update failed.', statusCode: 400 });
        }
    }

    async delete(req, res) {
        const { id } = req.params;

        try {
            const user = await User.findByPk(id);

            if(!user) {
                return res.json({ success: false, message: 'User does not exists.', statusCode: 400 });
            }

            await User.destroy({ where: { id } });

            return res.json({ success: true, message: 'User deleted.', statusCode: 200 });
        } catch(err) {
            return res.json({ success: false, message: 'Delete failed.', statusCode: 400 });
        }
    }
}

module.exports = new UserController();
