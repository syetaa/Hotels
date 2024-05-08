export async function getRoom(id) {
    const url = `http://127.0.0.1:8000/rooms/${id}`;

    const response = await fetch(url);
    const data = await response.json();


    if (data) {
        return data;
    }

    return Promise.reject('Failed to get rooms from backend')
    // if (response.status === 401) {
    //     alert("Не правильный пароль")
    // }

}