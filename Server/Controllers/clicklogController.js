'use strict';

const ClickLogData = require("../db/ClickLogs");

const getAllClickLogInMonth = async (req, res, next) => {
  try {
    const clicklogsinmonth = await ClickLogData.getClickLogsInMonth();
    res.status(200).json({
      status: "OK",
      dataclicklogsinmonth: {
        clicklogsinmonth: clicklogsinmonth,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllClickLoglastMonth = async (req, res, next) => {
  try {
    const clicklogslastmonth = await ClickLogData.getClickLogsLastMonth();
    res.status(200).json({
      status: "OK",
      dataclicklogslastmonth: {
        clicklogslastmonth: clicklogslastmonth,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllClickLog = async (req, res, next) => {
  try {
    const clicklogs = await ClickLogData.getClickLogs();
    res.status(200).json({
      status: "OK",
      dataclicklogs: {
        clicklogs: clicklogs,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const addClickLog = async (req, res, next) => {
  try {
    const dataclicklogs = req.body;
    const createdclicklog = await ClickLogData.CreateClickLog(dataclicklogs);
    res.status(200).json({
      status: "OK",
      dataclicklog: {
        clicklog: createdclicklog,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};


module.exports = {
  getAllClickLogInMonth,
  getAllClickLoglastMonth,
  getAllClickLog,
  addClickLog,
};
