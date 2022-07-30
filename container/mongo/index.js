
class ContainerChat{
	constructor(models){
		this.models = models
	}

	guardarChat = async(data)=>{
		const result = new this.models(data)
		return await result.save()
	}
	consultarChat = async()=>{
		return await this.models.find() 
	} 

}


module.exports = ContainerChat