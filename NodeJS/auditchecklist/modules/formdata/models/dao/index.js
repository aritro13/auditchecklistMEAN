const FormDataSet = require('../formdataset').formdataset;


var DataSetOps = module.exports = {
    addValues: (data) => {
        let newFormData = new FormDataSet(data);
        return newFormData.save().then((result)=>
            {
                console.log("Add Success");
                return {msg:'Form Data Added'};
            },(reason) => {
                console.log("Add Failed");
                return {msg:'Add Failed',reason: reason};
            }
        );
    },

    getValues: (condition) => {
        return FormDataSet.find(condition).then(result => {
            return result;
        })
    }

    
}

