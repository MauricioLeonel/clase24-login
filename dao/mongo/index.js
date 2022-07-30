const containerMongo = require('../../container/mongo')

class DaoMongoCarrito extends containerMongo{
	constructor(data){
		super(data)
	}

	saveData = async (data)=>{
		return await this.guardarChat(data)
	}

	getAll = async()=>{
		return await this.consultarChat()
	}

}


module.exports = DaoMongoCarrito