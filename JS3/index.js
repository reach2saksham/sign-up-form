fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(data => {
    const users = data.data;
    const tableBody = document.querySelector('#ut tbody');

    users.forEach(user => {
        const row = document.createElement('tr');
        const avtd = document.createElement('td');
        const avimage = document.createElement('img');
        avimage.src = user.avatar;
        avtd.appendChild(avimage);

        const idtd = document.createElement('td');
        idtd.textContent = user.id;

        const emailtd = document.createElement('td');
        emailtd.textContent = user.email;

        const name1td = document.createElement('td');
        name1td.textContent = user.first_name;

        const name2td = document.createElement('td');
        name2td.textContent = user.last_name;

        row.appendChild(idtd);
        row.appendChild(avtd);
        row.appendChild(emailtd);
        row.appendChild(name1td);
        row.appendChild(name2td);

        tableBody.appendChild(row);
    });
})
.catch(error => console.log(error));