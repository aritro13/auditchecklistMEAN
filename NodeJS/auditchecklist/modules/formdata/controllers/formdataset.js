const DataSet = require('../models/dao');
//var asyncLoop = require('node-async-loop');
const FormDataSet = require('../models/formdataset').formdataset;

var DataSetOps = module.exports = {
    updateValues: (req, res, next) => {

        //var data = req.body;
        //var count = data.length;
        //let UpdateStatus = new Array();

        let newFormData = req.body;

        // let newFormData = new FormDataSet({
        //     section1: req.body.section1,
        // });

        // newFormData.section1.header = req.body.section1.header,
        // newFormData.section1.description = req.body.section1.description,

        // newFormData.save((err, form)=>{
        //     if(err){
        //         res.json({msg:'Failed to add'});
        //     }
        //     else{
        //         res.json({
        //             header: req.body.section1.header,
        //             result:'Form Data Added'});
        //     }
        // });
        
        DataSet.updateValues(newFormData);
        
        // for (var i = 0; i < count; i++) {
        //     UpdateStatus[i] = DataSet.updateValues(data[i]);
        // }

        // Promise.all(UpdateStatus).then(result => {
        //     res.json({ result: result });
        // });


    },

    getValues: (req, res, next) => {
        DataSet.getValues({}).then(result => {
            res.json({ result: result });
        })
    }
}

