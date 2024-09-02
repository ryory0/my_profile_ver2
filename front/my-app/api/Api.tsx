const baseurl = "http://localhost:8000"

interface User {
	id: number;
	name: string;
	status: string;
	experience: string;
};

interface getUsersResponseProp{
	Users:User[]
}

export const Api = {
	getUsers:async()=>{
		const url = `${baseurl}/users`
		console.log(url)
		try{
			const res = await fetch(url)
			if (res.ok) {
				const jsonResponse = await res.json();
				return jsonResponse
			} else {
				console.error('HTTP error:', res.status, res.statusText);
				return
			}
		}catch(error){
			console.error('Fetch error:',error)
			return 
		}
	}
}	
