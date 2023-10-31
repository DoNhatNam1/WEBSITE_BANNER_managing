'use strict';

const express = require('express');
const userAccountController = require('../Controllers/accountController');
const router = express.Router();

const { getAllAccounts,
    } = userAccountController;

router.get('/', getAllAccounts);


module.exports = {
    routes: router
};