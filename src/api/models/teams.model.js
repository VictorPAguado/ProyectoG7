const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teamSchema = new Schema(
    {
        name: {type: String, required: true},
        location: {type: String, required: true},
        stadium: {type: String, required: true},
        president: {type: String, required: false},
        coach: {type: String, required: false},
        players:[{type: Schema.Types.ObjectId, ref:"player"}]
    },{
        timestamps: true
    }
)

const Team = mongoose.model('team', teamSchema);

module.exports = Team;