const protocol = process.env.BACKEND_PROTOCOL
const host = process.env.BACKEND_HOST
const port = process.env.BACKEND_PORT

export async function getHotels(token, city, min_price, max_price, capacity) {
    const url = `${protocol}://${host}:${port}/rooms?city=${city}&min_price=${min_price}&max_price=${max_price}&capacity=${capacity}`;

    const request = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer '+ token
        }
    }

    const response = await fetch(url, request);
    const data = await response.json();


    if (data) {
        return data;
    }

    return Promise.reject('Failed to get hotels from backend')
    // if (response.status === 401) {
    //     alert("Не правильный пароль")
    // }

}
