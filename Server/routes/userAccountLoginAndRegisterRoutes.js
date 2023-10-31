'use strict';

const express = require('express');
const userAccountController = require('../Controllers/accountController');
const router = express.Router();

const { getAllAccounts,
        addUserAccount,
    } = userAccountController;

router.get('/', getAllAccounts);
router.post('/', addUserAccount);


module.exports = {
    routes: router
};