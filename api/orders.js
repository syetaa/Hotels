export default async function getOrders(token) {
    const url = 'http://127.0.0.1:8000/orders/';

    const request = {
        'method': 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    }

    const response = await fetch(url, request);
    if (response.status === 401) {
        return false
    }
    const data = await response.json();
    console.log(data);

    if (data) {
        return data;
    }

    return Promise.reject('Failed to get orders from backend')

}

export async function addOrder(id, token) {
    const url = `http://127.0.0.1:8000/orders/${id}`;

    const request = {
        'method': 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    }

    console.log(request)
    const response = await fetch(url, request);
    if (response.status === 401) {
        return false
    }
    const data = await response.json();

    if (data) {
        return data;
    }
}

export async function deleteOrder(id, token) {
    const url = `http://127.0.0.1:8000/orders/${id}`;

    const request = {
        'method': 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    }

    const response = await fetch(url, request);
    if (response.status === 401) {
        return false
    }
    const data = await response.json();

    if (data) {
        return data;
    }
}
