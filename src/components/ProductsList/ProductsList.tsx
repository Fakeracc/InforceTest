import React, {useEffect,useState} from 'react';
import {ProductModel} from "../../models/product.model";
import ProductModal from "../Modal/Modal";
import {deleteProduct, getProducts} from "../../api/products/productsRequests";
import styles from "./ProductsList.module.scss"


const ProductsList = () => {
    const [products, setProducts] = useState<ProductModel | any>([]);
    const [modalVisible, setModalVisible] = useState(false);



    const fetchProducts = async (): Promise<void> => {
        const responseData: ProductModel[] = await getProducts();
        await setProducts(responseData)
    };

    // const updateProduct = async (id: number | string): Promise<(product: ProductModel) => Promise<number>> => {
    //     return async (product: ProductModel): Promise<number> => {
    //         const response = await editProduct(product, id);
    //         await fetchProducts();
    //         return response
    //     }
    // }


    const removeProduct = async (id: number): Promise<number> => {
        const response = await deleteProduct(id);
        setProducts(products.filter((product: ProductModel) => product.id !== id))
        return response
    }

    useEffect(() => {
      fetchProducts();
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
                       <th>Comments</th>
                   </tr>
                </thead>
                <tbody>
                {products.length ? (
                    products.map((product: ProductModel) =>
                      <tr key={product.id}>
                          <td>{product.id}</td>
                          <td>{product.name}</td>
                          <td>{product.count}</td>
                          <td>{product.size.width}</td>
                          <td>{product.size.height}</td>
                          <td>{product.weight}</td>
                          <td>
                              <button>Edit product</button>
                              <button onClick={() => removeProduct(product.id)}>Delete product</button>
                          </td>
                      </tr>
                    )
                ) : null}
                </tbody>
            </table>
            <ProductModal
                show={modalVisible}
                onHide={() => setModalVisible(false)}
                // updateProductModal={updateProduct(product.id)}
                products={products}
            />
        </>
    );
};

export default ProductsList;