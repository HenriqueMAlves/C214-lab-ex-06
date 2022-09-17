const validate = require('validate.js');

const Utils = require('../utils/utils');
const Constants = require('../utils/constants');
const MovieRepository = require('../port/movie_repository');
const Constraints = require('../utils/movie_validation');
const Validation = require('../utils/validation');

const Movie = {
    async create(data) {
        try {
            console.log("DATA *********************");
            console.log(data);

            const validation = Validation.create(data);

            if (validation) {
                return validation;
            }

            data.id = Utils.generateUuid();

            const response = await MovieRepository.create(data);

            console.log(response);

            if (response.code === 11000) {
                const result = Constants.ErrorDuplicate;
                return result;
            }
            return response;
            
        } catch (error) {
            return error;
        }
    },

    async update(data) {
        try {
            const validation = validate.validate(data, Constraints.update);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await MovieRepository.update(data);

            if (response === []) {
                const result = Constants.ErrorNotFound;
                return result;
            }
            return response;
        } catch (error) {
            return error;
        }
    },

    async delete(data) {
        try {
            const validation = validate.validate(data, Constraints.deleteBy);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await MovieRepository.delete(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async listByYear(data) {
        try {
            const validation = validate.validate(data, Constraints.get);
            if (validation) {
                const response = Constants.ErrorValidation;
                response.message = validation;
                return response;
            }

            const response = await MovieRepository.getByYear(data);

            return response;
        } catch (error) {
            return error;
        }
    },

    async list() {
        try {
            const response = await MovieRepository.list();

            return response;
        } catch (error) {
            return error;
        }
    },
};
module.exports = Movie;