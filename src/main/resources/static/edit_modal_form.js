const editModal = document.getElementById('editModal')
editModal.addEventListener('show.bs.modal', async event => {
    const editButton = event.relatedTarget
    const userFromTableId = JSON.parse(editButton.getAttribute("data-bs-userFromTableId"));
    const response = await fetch(`http://localhost:8080/admin/api/${userFromTableId}`);
    const user = await response.json();
    document.getElementById('editedUserId').value = user.id;
    document.getElementById('editedUserName').value = user.name;
    document.getElementById('editedUserLastName').value = user.lastName;
    document.getElementById('editedUserAge').value = user.age;
    document.getElementById('editedUserEmail').value = user.username;
    const rolesSelect = document.getElementById('editedUserRoles');
    rolesSelect.selectedIndex = -1;
    const allRolesResponse = await fetch("http://localhost:8080/admin/api/all_roles");
    const allRoles = await allRolesResponse.json();
    allRoles.forEach(role => {
        if (!Array.from(rolesSelect.options).some(option => option.text === role.authority)) {
            let option = document.createElement("option");
            option.value = role.id;
            option.text = role.authority;
            rolesSelect.add(option);
        }
        user.authorities.forEach(authority => {
            Array.from(rolesSelect.options).forEach(option => {
                if (option.text === authority.authority) {
                    option.selected = true;
                }
            });
        });
    });
});