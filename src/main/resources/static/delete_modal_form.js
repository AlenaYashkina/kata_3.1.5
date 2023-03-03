const deleteModal = document.getElementById('deleteModal')
deleteModal.addEventListener('show.bs.modal', event => {
    const deleteButton = event.relatedTarget
    const userFromTableId = JSON.parse(deleteButton.getAttribute("data-bs-userFromTableId"));
    fetch(`http://localhost:8080/admin/api/${userFromTableId}`)
        .then(response => response.json())
        .then(user => {
            document.getElementById('deletedUserId').value = user.id;
            const userFromTableId = document.getElementById('deletedUserId').value;
            document.getElementById('deletedUserName').value = user.name;
            document.getElementById('deletedUserLastName').value = user.lastName;
            document.getElementById('deletedUserAge').value = user.age;
            document.getElementById('deletedUserEmail').value = user.username;
            document.getElementById('deletedUserPassword').value = user.password;
            const deletedUserRolesSelect = document.getElementById('deletedUserRoles');
            deletedUserRolesSelect.selectedIndex = -1;
            fetch("http://localhost:8080/admin/api/all_roles")
                .then(response => response.json())
                .then(allRoles => {
                    allRoles.forEach(role => {
                        if (!Array.from(deletedUserRolesSelect.options).some(option => option.text === role.authority)) {
                            let option = document.createElement("option");
                            option.value = role.id;
                            option.text = role.authority;
                            option.disabled = true;
                            deletedUserRolesSelect.add(option);
                        }
                        user.authorities.forEach(authority => {
                            Array.from(deletedUserRolesSelect.options).forEach(option => {
                                if (option.text === authority.authority) {
                                    option.selected = true;
                                }
                            });
                        });
                    });
                });
        });
});