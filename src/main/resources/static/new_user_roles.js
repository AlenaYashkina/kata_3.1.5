document.addEventListener('DOMContentLoaded', function () {
    const newTab = document.querySelector('#new_user-tab');
    newTab.addEventListener('click', async function () {
        const rolesSelect = document.getElementById('newUserRoles');
        const allRolesResponse = await fetch("http://localhost:8080/admin/api/all_roles");
        const allRoles = await allRolesResponse.json();
        allRoles.forEach(role => {
            if (!Array.from(rolesSelect.options).some(option => option.text === role.authority)) {
                let option = document.createElement("option");
                option.value = role.id;
                option.text = role.authority;
                rolesSelect.add(option);
            }
        });
    });
});
