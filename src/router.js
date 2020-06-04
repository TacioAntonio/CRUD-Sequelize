const express = require('express');
const router = express.Router();
const UserController = require('./app/controllers/UserController');
const AuthController = require('./app/controllers/AuthController');
const ContactController = require('./app/controllers/ContactController');
const checkAuthentication = require('./app/middlewares/auth');

router.get('/users', UserController.collectAll);
router.get('/users/:id', UserController.collectByPk);
router.post('/users', UserController.insert);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);
router.post('/login', AuthController.login);
router.delete('/logout', AuthController.logout);
router.post('/contact', checkAuthentication, ContactController.send);

module.exports = router;
