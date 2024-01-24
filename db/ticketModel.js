const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const TicketSchema = new mongoose.Schema({
    ticket:[[Number]],
}, {
    timestamps: true
})

TicketSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("ticket",TicketSchema)