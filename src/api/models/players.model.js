const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema(
    {
        name: {type: String, required: true},
        surname: {type: String, required: true},
        nationality: {type: String, required: true},
        age: {type: Number, required: false},
        team:[{type: Schema.Types.ObjectId, ref:"team"}]
    },{
        timestamps: true
    }
)
const Player = mongoose.model('player', playerSchema);

module.exports = Player;