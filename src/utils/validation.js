const validate = require('validate.js');
const Constants = require('./Constants');
const Constraints = require('./movie_validation');

const Validation = {
    create(data) {
        console.log("val *********************");
        console.log(data);
        console.log("rag *********************");
        console.log( Constraints.create);

        const validation = validate.validate(data, Constraints.create);

        console.log("sex *********************");
        console.log(validation);

        if (validation) {
            const response = Constants.ErrorValidation;
            response.message = validation;
            return response;
        }
        return validation;
    }
};
module.exports = Validation;
