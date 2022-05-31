export default function authHeader() {
    //const jwt = JSON.parse(localStorage.getItem('jwt'));
    // if (user && user.access_token) {
        return { Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('jwt')),
                'Content-Type': 'multipart/form-data'
        };
    // } else {
        return {};
    // }
}



