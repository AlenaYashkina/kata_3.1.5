document.getElementById('editUserForm').addEventListener('submit', async editEvent => {
    editEvent.preventDefault();
    const editedUserId = document.getElementById('editedUserId').value;
    const editedUserName = document.getElementById('editedUserName').value;
    const editedUserLastName = document.getElementById('editedUserLastName').value;
    const editedUserAge = document.getElementById('editedUserAge').value;
    const editedUserEmail = document.getElementById('editedUserEmail').value;
    const editedUserPassword = document.getElementById('editedUserPassword').value;
    const editedUserRoles = Array.from(document.getElementById('editedUserRoles').options)
        .filter(option => option.selected)
        .map(option => option.value);

    const editedUser = {
        id: editedUserId,
        name: editedUserName,
        lastName: editedUserLastName,
        age: editedUserAge,
        username: editedUserEmail,
        password: editedUserPassword,
        roles: editedUserRoles.map(id => ({id})),
    };
    await fetch(`http://localhost:8080/admin/api/${editedUserId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedUser),
    });
    const editModal = document.getElementById('editModal');
    const bsModal = bootstrap.Modal.getInstance(editModal);
    bsModal.hide();
    await loadData();
});
