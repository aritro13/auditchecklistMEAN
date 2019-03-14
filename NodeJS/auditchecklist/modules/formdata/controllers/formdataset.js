const DataSet = require('../models/dao');
//var asyncLoop = require('node-async-loop');
const FormDataSet = require('../models/formdataset').formdataset;
var Promise = require('bluebird')

var DataSetOps = module.exports = {
    updateValues: (req, res, next) => {
        let newFormData = new FormDataSet(req.body);
        DataSet.addValues(newFormData).then(result => {
            res.json({ result: result});
        });
    },

    getValues: (req, res, next) => {
        DataSet.getValues({}).then(result => {
            res.json({ result: result });
        })
    }
}

