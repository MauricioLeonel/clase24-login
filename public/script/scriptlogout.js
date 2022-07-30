setTimeout(()=>{
		document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		location.replace('/login')
	}, 5000)

// console.log()

const username = document.getElementById('username')

username.innerHTML = document.cookie.split('=')[1]

