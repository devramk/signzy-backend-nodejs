const express = require('express');
const OsMonitorRouter = express.Router();

const OsMonitorController = require('./../controllers/os-monitor-controller');

OsMonitorRouter.route('/get/usage/cpuMemory').get(OsMonitorController.getRamAndCpuUsage);
OsMonitorRouter.route('/get/usage/cpu/time').post(OsMonitorController.getCpuUsageByTime);
OsMonitorRouter.route('/get/usage/memory/time').post(OsMonitorController.getRamUsageByTime);

module.exports = OsMonitorRouter;