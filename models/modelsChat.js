const mongoose = require('mongoose')
const modelsChat = mongoose.Schema({
	autor:{
		email:String,
		nombre:String,
		apellido:String,
		edad:String,
		alias:String,
		avatar:String
	},
	texto:String,
	fecha:{ type: Date, default: Date.now }
})


module.exports = mongoose.model('chats',modelsChat)