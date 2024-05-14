const protocol = process.env.BACKEND_PROTOCOL
const host = process.env.BACKEND_HOST
const port = process.env.BACKEND_PORT

export async function getUserInfo(token) {
    const url = `${protocol}://${host}:${port}/users`;

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