const express = require('express');
const versionRouter = express.Router();
const versionHistoryController = require('../controllers/versions/versionHistoryController.js');
const stsController = require('../controllers/stsController.js')


versionRouter.post('/versionList', stsController.getCredentials, versionHistoryController.viewVersionList, (req, res) => {
  return res.status(200).json(res.locals.versionList)
})

versionRouter.post('/functionVersion', stsController.getCredentials, versionHistoryController.viewVersionList, versionHistoryController.viewFunctionVersion, (req, res) => {
  return res.status(200).json(res.locals.versionInfo)
})

versionRouter.post('/getAlias', stsController.getCredentials, versionHistoryController.getAlias, (req, res) => {
  return res.status(200).json(res.locals.aliasList);
})

module.exports = versionRouter;