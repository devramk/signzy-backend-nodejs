const os = require('os');
const osUtils = require('os-utils');
const moment = require('moment');

let getRamAndCpuUsage = (req, res) => {
    const totalMemory = os.totalmem();
    let freeMemory = os.freemem();
    let netMemory = totalMemory - freeMemory;
    let memoryUsagePercent = (freeMemory * 100) / totalMemory;
    osUtils.cpuUsage(usage => {
        let cpuUsagePercent = usage * 100;
        res.status(200).json({
            memoryUsagePercent: memoryUsagePercent.toFixed(2),
            cpuUsagePercent: cpuUsagePercent.toFixed(2),
            calculatedAt: moment().format('HH:mm:ss').toString(),
            totalMemory: (((totalMemory/1024)/1024)/1024).toFixed(2),
            freeMemory: (((freeMemory/1024)/1024)/1024).toFixed(2),
            usedMemory: (((netMemory/1024)/1024)/1024).toFixed(2),
            noOfCpus: os.cpus().length,
        });
    });
};

let getCpuUsageByTime = (req, res) => {
    let cpuUsageList = req.body.cpuUsageList;
    if (cpuUsageList == 'undefined' || !cpuUsageList) {
        cpuUsageList = [];
    }
    osUtils.cpuUsage(usage => {
        let cpuUsagePercent = usage * 100;
        let time = moment().format('HH:mm').toString();
        if (cpuUsageList.length == 10) {
            cpuUsageList.splice(0, 1);
        }
        cpuUsageList.push({
            cpuUsagePercent: cpuUsagePercent.toFixed(2),
            time: time
        });
        res.status(200).json({cpuUsageList: cpuUsageList});
    });
};

let getRamUsageByTime = (req, res) => {
    let ramUsageList = req.body.ramUsageList;
    if (ramUsageList == 'undefined' || !ramUsageList) {
        ramUsageList = [];
    }
    const totalMemory = os.totalmem();
    let freeMemory = os.freemem();
    let netMemory = totalMemory - freeMemory;
    console.log(netMemory);
    let memoryUsagePercent = (freeMemory * 100) / totalMemory;
    let time = moment().format('HH:mm').toString();
    if (ramUsageList.length == 10) {
        ramUsageList.splice(0, 1);
    }
    ramUsageList.push({
        ramUsagePercent: memoryUsagePercent.toFixed(2),
        time: time
    });
    res.status(200).json({
        ramUsageList: ramUsageList
    });
};

module.exports = {
    getRamAndCpuUsage: getRamAndCpuUsage,
    getCpuUsageByTime: getCpuUsageByTime,
    getRamUsageByTime: getRamUsageByTime
};