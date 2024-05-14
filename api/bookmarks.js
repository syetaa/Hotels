const protocol = process.env.BACKEND_PROTOCOL
const host = process.env.BACKEND_HOST
const port = process.env.BACKEND_PORT

export default async function getBookmarks(token) {
    const url = `${protocol}://${host}:${port}/bookmarks`;

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

    return Promise.reject('Failed to get bookmarks from backend')

}

export async function addBookmark(id, token) {
    const url = `${protocol}://${host}:${port}/bookmarks/${id}`;

    const request = {
        'method': 'POST',
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

export async function deleteBookmark(id, token) {
    const url = `${protocol}://${host}:${port}/bookmarks/${id}`;

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
