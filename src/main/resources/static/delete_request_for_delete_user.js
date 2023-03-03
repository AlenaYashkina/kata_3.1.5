document.getElementById('deleteUserForm').addEventListener('submit', async deleteEvent => {
    deleteEvent.preventDefault();
    const deletedUserId = document.getElementById('deletedUserId').value;
    await fetch(`http://localhost:8080/admin/api/${deletedUserId}`, {
        method: 'DELETE'
    });
    const deleteModal = document.getElementById('deleteModal');
    const bsDeleteModal = bootstrap.Modal.getInstance(deleteModal);
    bsDeleteModal.hide();
    await loadData();
});
