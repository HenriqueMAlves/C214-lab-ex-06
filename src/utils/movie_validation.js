const create = {
    name: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    producer: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    actors: {
        presence: {
            allowEmpty: true,
        },
        type: 'array',
    },
    year: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
};

const update = {
    name: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    producer: {
        presence: {
            allowEmpty: true,
        },
        type: 'string',
    },
    actors: {
        presence: {
            allowEmpty: true,
        },
        type: 'array',
    },
    year: {
        presence: {
            allowEmpty: true,
        },
        type: 'number',
    },
};

const get = {
    year: {
        presence: {
            allowEmpty: false,
        },
        type: 'number',
    },
};

const deleteBy = {
    name: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};