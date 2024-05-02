export async function getHotels(city, min_price, max_price, capacity) {
    const url = `http://127.0.0.1:8000/rooms/?city=${city}&min_price=${min_price}&max_price=${max_price}&capacity=${capacity}`;

    const params = {
        'city': city,
        'min_price': min_price,
        'max_price': max_price,
        'capacity': capacity,
    };

    const response = await fetch(url, params);
    const data = await response.json();
    console.log(typeof data);
    console.log(data);

    console.log(Object.entries(data));


    if (data) {
        return data;
    }

    return Promise.reject('Failed to get hotels from backend')
    // if (response.status === 401) {
    //     alert("Не правильный пароль")
    // }

}