const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const leagueSchema = new Schema(
    {
        name: {type: String, required: true},
        country: {type: String, required: true},
        teams:[{type: Schema.Types.ObjectId, ref:"team"}]
    },{
        timestamps: true
    }
)

const League = mongoose.model('league', leagueSchema);

module.exports = League;