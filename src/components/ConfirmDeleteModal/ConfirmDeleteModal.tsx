import React, {Dispatch, SetStateAction} from 'react';
import styles from "../ProductModal/ProductModal.module.scss";
import Modal from "react-modal";
import {ProductModel} from "../../models/product.model";
import {useActions} from "../../hooks/reduxHooks";

interface ConfirmDeleteModalProps{
    showConfirmModal: boolean;
    setShowConfirmModal: Dispatch<SetStateAction<boolean>>;
    editProduct: ProductModel;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({showConfirmModal,setShowConfirmModal,editProduct}) => {

    const {removeProduct} = useActions()


    const deleteProduct = () => {
        removeProduct(editProduct.id);
        setShowConfirmModal(false);
    }

    return (
        <Modal
            isOpen={showConfirmModal}
            className={styles.modal}
        >
            <h1>Are you sure, you want to delete this product?</h1>
            <button onClick={() => deleteProduct()}>Confirm delete</button>
            <button onClick={() => setShowConfirmModal(false)}>Close window</button>
        </Modal>
    );
};

export default ConfirmDeleteModal;