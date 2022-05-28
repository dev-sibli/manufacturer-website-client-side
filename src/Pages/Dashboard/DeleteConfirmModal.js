import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingOrder, setDeletingOrder, refetch }) => {
    const { toolName, _id } = deletingOrder;
    const handleDelete = () => {
        fetch(`https://fierce-wildwood-20183.herokuapp.com/order/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Order: ${toolName} is deleted.`)
                    setDeletingOrder(null);
                    refetch();
                }
                else {
                    toast.error('Deleting failed')
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete order of {toolName}!</h3>
                    <p class="py-4"><small>Its can't be reverted</small></p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;