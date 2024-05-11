export default async function getBookmarks(token) {
    const url = 'http://127.0.0.1:8000/bookmarks/';

    const request = {
        'method': 'GET',
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    }

    console.log(request);
    
    const response = await fetch(url, request);
    if (response.status === 401) {
        return false
    }
    const data = await response.json();
    console.log(data);

    if (data) {
        return data;
    }

    return Promise.reject('Failed to get bookmarks from backend')

}

export async function addBookmark(id) {
    const url = `http://127.0.0.1:8000/bookmarks/?room_id=${id}`;

    const response = await fetch(url, {
        'method': 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    });
    if (response.status === 401) {
        return false
    }
    const data = await response.json();
    console.log(data);

    if (data) {
        return data;
    }

    return Promise.reject('Failed to get bookmarks from backend')

}

export async function deleteBookmark(id) {
    const url = `http://127.0.0.1:8000/bookmarks/?room_id=${id}`;

    const response = await fetch(url, {
        'method': 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    });
    if (response.status === 401) {
        return false
    }
    const data = await response.json();
    console.log(data);

    if (data) {
        return data;
    }

    return Promise.reject('Failed to get bookmarks from backend')

}
