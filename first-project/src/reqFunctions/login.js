

class auth{

    login(username, pass){
        fetch(`http://localhost:3001/api/auth/signin`, {method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: username,  hash_password: pass})})
        .then(res =>  res.json())
        .then(data => {
            if(data.login){
                localStorage.setItem("user", JSON.stringify(data));
            }
            console.log('work fine');
            return data;
        })
    }

    logout(){
        localStorage.removeItem("user");
    }
}

export default new auth();