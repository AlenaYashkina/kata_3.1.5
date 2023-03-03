document.getElementById('newUser').addEventListener('submit', async newEvent => {
    newEvent.preventDefault();
    const newUserName = document.getElementById('newUserName').value;
    const newUserLastName = document.getElementById('newUserLastName').value;
    const newUserAge = document.getElementById('newUserAge').value;
    const newUserEmail = document.getElementById('newUserEmail').value;
    const newUserPassword = document.getElementById('newUserPassword').value;
    const newUserRoles = Array.from(document.getElementById('newUserRoles').options)
        .filter(option => option.selected)
        .map(option => option.value);

    const newUser = {
        name: newUserName,
        lastName: newUserLastName,
        age: newUserAge,
        username: newUserEmail,
        password: newUserPassword,
        roles: newUserRoles.map(id => ({id})),
    };
    await fetch(`http://localhost:8080/admin/api/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
    });
    await loadData();
    document.getElementById('users_table-tab').click();
});
