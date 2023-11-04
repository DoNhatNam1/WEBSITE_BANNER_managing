'use strict';

const express = require('express');
const userInfoController = require('../Controllers/accountController');
const router = express.Router();

const { getAManagerInfo,
        updateManagerInfo
    } = userInfoController;

router.get('/:managerId/profile/info', getAManagerInfo);
router.get('/:managerId/profile/edit', getAManagerInfo);
router.put('/:managerId/profile/edit', updateManagerInfo);


module.exports = {
    routes: router
};