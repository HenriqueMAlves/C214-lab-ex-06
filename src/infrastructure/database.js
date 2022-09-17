const mongoose = require('mongoose');

const uri = `mongodb+srv://user:user@cluster0.g8salva.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const movieSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    name: String,
    producer: String,
    actors: [String],
    year: Number,
});

const MovieModel = mongoose.model('MovieModel', movieSchema);

module.exports = {
    MovieModel,
};