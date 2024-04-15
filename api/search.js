export function getHotels(city, min_price, max_price, capacity) {
    const url = 'http://127.0.0.1:8000/rooms';
    
    const request = { 
        'city': city,
        'min_price': min_price, 
        'max_price': max_price, 
        'capacity': capacity,
    };

    fetch(url, request).then(res => {
        const data = res.json();
        return data;
    });

    // if (response.status === 401) {
    //     alert("Не правильный пароль")
    // }

}