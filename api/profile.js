export async function getUserInfo(token) {
    const url = 'http://127.0.0.1:8000/users/';

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

    if (data) {
        return data;
    }

    return Promise.reject('Failed to get user data from backend')
}