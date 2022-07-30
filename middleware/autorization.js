const autorizationUser = (req,res,next)=>{
	// console.log(req.session.usename)
	if(req.session.username && req.cookies.connect_user){
		 res.redirect('/principal')
	}else{
		next()

	}
}

module.exports = autorizationUser