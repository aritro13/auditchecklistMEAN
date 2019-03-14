const mongoose = require('mongoose');

const FormDataSchema = mongoose.Schema({
    section1: [
        {
            header: String,
            description: String,
            question1: String,
            response1: String,
            question2: String,
            response2: String,
            question3: String,
            response3: String,
            question4: String,
            response4: String
        }
    ],
    section2: [
        {
            header: String,
            description: String,
            question1: String,
            optionsOf1: [
                {
                    option1: String,
                    option2: String
                }
            ],
            response1: String,
            optionsOf2: [
                {
                    option1: String,
                    option2: String,
                    option3: String,
                    other: String

                }
            ],
            question2: String,
            response2: String,
            question3: String,
            response3: String,
            question4: String,
            response4: String,
            question5: String,
            response5: String,
            question6: String,
            response6: String,
            question7: String,
            response7: String
        }
    ],
    section3: [
            {
            header: String,
            description: String,

            question1: String,
            checkBox1: [
                {
                    email: Boolean,
                    physicalCopy: Boolean
                }
            ],
            question2: String,
            checkBox2: [
                {
                    email: Boolean,
                    physicalCopy: Boolean
                }
            ],
            question4: String,
            checkBox4: [
                {
                    email: Boolean,
                    physicalCopy: Boolean
                }
            ],
            question5: String,
            checkBox5: [
                {
                    email: Boolean,
                    physicalCopy: Boolean
                }
            ],
            question6: String,
            checkBox6: [
                {
                    email: Boolean,
                    physicalCopy: Boolean
                }
            ],
        }
    ]
});

let formdataset = mongoose.model('formdataset', FormDataSchema);

module.exports = {
    formdataset: formdataset
}