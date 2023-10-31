'use strict';

const express = require('express');
const userAccountController = require('../Controllers/accountController');
const router = express.Router();

const { getAManagerAccountPassOnly,
        updateManagerAccount
    } = userAccountController;

router.get('/:managerId/changepassword', getAManagerAccountPassOnly);
router.put('/:managerId/changepassword', updateManagerAccount);


module.exports = {
    routes: router
};