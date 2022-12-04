const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tacheSchema = new Schema({
    eventname: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const Tache = mongoose.model('Tache', tacheSchema);

module.exports = Tache;