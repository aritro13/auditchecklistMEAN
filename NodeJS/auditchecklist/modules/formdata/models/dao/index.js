const formdataset = require('../formdataset').formdataset;


var DataSetOps = module.exports = {
    updateValues: (data) => {
        return formdataset.update(
            { header: data.header },
            {
                value: data.value,
                datatype: data.datatype,
                format: data.format
            }).then(
            status => {
                if (status.ok != 1) {
                    //error
                    return {
                        header: data.header,
                        Modified: false,
                        error: true
                    };
                }
                else {
                    //success
                    if (status.nModified == 1) {
                        //modified
                        return {
                            header: data.header,
                            Modified: true,
                            error: false
                        };

                    }
                    else {
                        //not modified
                        return {
                            header: data.header,
                            Modified: false,
                            error: false
                        };

                    }
                }
            });
    },

    getValues: (condition) => {
        return formdataset.find(condition).then(result => {
            return result;
        })
    }

    
}

