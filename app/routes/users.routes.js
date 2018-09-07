const {Router} = require('express');

const {getUsers, createUser, findUserByName} = require('../repositories/user.repository');

const router =  Router();

router.route('/')
    .get(async (req, res, next) => {
        let users;
        try {
           users = await getUsers();
        } catch(e) {
           return next(e);
        }

        res.json(users);
    }).post((req, res) => {
        const user = req.body;
        createUser(user);

        res.status(201).json({message: 'User successfully created!'});
    });

router.route('/firstname/:firstname')
    .get((req, res) => {
        const user = findUserByName(req.params.firstname);
        if (!user) {
            return res.status(404).json({ message: 'User not found! '});
        }

        res.json(user);
    });


module.exports = router;