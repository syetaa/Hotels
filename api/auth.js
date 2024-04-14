// export async function chekRegister(){
//     const url = 'http://127.0.0.1/users/';
//     const response = await fetch(url);
//     console.log(response)
//     // const data = response.json;

//     if (response.status === 401){
//         return false ;
//     } 
//     return true;

// }

// export async function onSignIn(username,password){
//     const url = 'http://127.0.0.1/users/token';
//     const response = await fetch(url, {
//         method: "POST",
//         body: new FormData({'username' : username, 'password' : password}),
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
         
//     });
//     console.log(response)
//     // const data = response.json;

//     if (response.status === 401){
//         alert("Не правильный пароль")
//     } 
//     return window.location.replace("/");

// }






export async function chekRegister(){
    if (typeof window !== 'undefined'){
        const access_token = localStorage.getItem('access_token');
    }
    
    if (typeof access_token === 'undefiened') {
        return false;
    }
    return true;
}

export async function onSignIn(username,password){
    const url = 'http://127.0.0.1/users/token';
    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);
    const response = await fetch(url, {
        method: "POST",
        body: formData,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
         
    });
    console.log(response)
    const data = response.json;

    if (response.status === 401){
        alert("Не правильный пароль")
    }
    if ('access_token' in data) {
        const decodedToken = decodeJwt(data['access_token']);
        localStorage.setItem('token', data['access_token']);
    }
    // return window.location.replace("/");

}