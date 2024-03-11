// Fetch API


fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        console.log(response.status);
        console.log(response.ok);
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(error => console.error('Error : ', error))