fetch('http://localhost:8080/admin/api')
    .then(response => response.json())
    .then(allUsers => {
        const rows = allUsers.map(userFromTable => `
    <tr id="userRow${userFromTable.id}">
        <td id="userId">${userFromTable.id}</td>
        <td id="username">${userFromTable.name}</td>
        <td id="userLastName">${userFromTable.lastName}</td>
        <td id="userAge">${userFromTable.age}</td>
        <td id="userEmail">${userFromTable.username}</td>
        <td id="userRoles">${userFromTable.authorities.map(role => role.authority).join(' ')}</td>
        <td>
            <button type="button" class="btn btn-info btn-sm text-white" id="editButton" data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    data-bs-userFromTableId="${userFromTable.id}">
                Edit
            </button>
        </td>
        <td>
            <button type="button" class="btn btn-danger btn-sm" id="deleteButton" data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                    data-bs-userFromTableId="${userFromTable.id}">
                Delete
            </button>
        </td>
    </tr>
`).join('');

        const tbody = document.querySelector('tbody');
        tbody.innerHTML = rows;
    });