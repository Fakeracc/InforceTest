import React, {useEffect,useState} from 'react';
import {ProductModel} from "../../models/product.model";
import ProductModal from "../ProductModal/ProductModal";
import styles from "./ProductsList.module.scss"
import {useActions, useTypedSelector} from "../../hooks/reduxHooks";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal";


const ProductsList = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [confirmModalVisible, setConfirmModalVisible] = useState(false)
    const {products} = useTypedSelector(state => state.products)
    const {fetchProducts} = useActions();
    const [edit,setEdit] = useState<any>(null)


    const editProduct = (product: ProductModel) => {
        if(product !== null){
            setEdit(product);
        }
        setModalVisible(true)
    }

    const confirmDelete = (product: ProductModel) => {
        setEdit(product)
        setConfirmModalVisible(true)
    }

    useEffect(() => {
      fetchProducts()
    },[])

    return (
        <>
            <button onClick={() => setModalVisible(true)}>Add product</button>
            <table className={styles.contentTable}>
                <thead>
                   <tr>
                       <th>Id</th>
                       <th>Name</th>
                       <th>Count</th>
                       <th>Width</th>
                       <th>Height</th>
                       <th>Weight</th>
                       <th>Actions</th>
                       <th>Image</th>
                       <th>Comments</th>
                   </tr>
                </thead>
                <tbody>

                {products?.length ? (
                    products.map((product: ProductModel) =>
                      <tr key={product.id}>
                          <td>{product.id}</td>
                          <td>{product.name}</td>
                          <td>{product.count}</td>
                          <td>{product.size.width}</td>
                          <td>{product.size.height}</td>
                          <td>{product.weight}</td>
                          <td>
                              <button onClick={() => editProduct(product)}>Edit product</button>
                              <button onClick={() => confirmDelete(product)}>Delete product</button>
                          </td>
                          <td>
                              <img alt="Some product"
                                   // height={product.size.height}
                                   // width={product.size.width}
                                   height={50}
                                   width={50}
                                   src={product.imageUrl}
                              />
                          </td>
                      </tr>
                    )
                ) : null}
                </tbody>
            </table>
            <ConfirmDeleteModal
                showConfirmModal={confirmModalVisible}
                setShowConfirmModal={setConfirmModalVisible}
                editProduct={edit}
            />
            <ProductModal
                show={modalVisible}
                onHide={() => setModalVisible(false)}
                editProduct={edit}
                products={products}
            />
        </>
    );
};

export default ProductsList;