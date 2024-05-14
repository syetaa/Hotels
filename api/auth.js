const protocol = process.env.BACKEND_PROTOCOL
const host = process.env.BACKEND_HOST
const port = process.env.BACKEND_PORT

export async function onSignIn(username, password) {
    const url = `${protocol}://${host}:${port}/users/token`;

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    const request = new Request(url, {
        method: 'POST',
        body: formData,
    });
    const response = await fetch(request);

    if (response.status === 401) {
        alert("Не правильный пароль")
    }
    const data = await response.json();

    if ('access_token' in data) {
        localStorage.setItem('token', data['access_token']);
    }

    return window.location.replace("/");
}