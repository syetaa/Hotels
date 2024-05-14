const protocol = process.env.BACKEND_PROTOCOL
const host = process.env.BACKEND_HOST
const port = process.env.BACKEND_PORT

export async function getRoom(id, token) {
    const url = `${protocol}://${host}:${port}/rooms/${id}`;
    const request = {
        'method': 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    }

    const response = await fetch(url, request);
    const data = await response.json();
    console.log(url, data)

    if (data) {
        return data;
    }

    return Promise.reject('Failed to get rooms from backend')
    // if (response.status === 401) {
    //     alert("Не правильный пароль")
    // }

}
