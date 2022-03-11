import {Dispatch} from "redux";
import {ProductActions, ProductActionType} from "../../models/ActionTypes/ProductActions";
import {addProduct, deleteProduct, editProduct, getProducts} from "../../api/products/productsRequests";
import {ProductModel} from "../../models/product.model";

export const fetchProducts = () => {
    return async(dispatch: Dispatch<ProductActionType>) => {
        try{
           dispatch({type: ProductActions.FETCH_PRODUCTS});
           const data = await getProducts();
           dispatch({type: ProductActions.FETCH_PRODUCTS_SUCCESS, payload: data});
        }catch(error){
           dispatch({type: ProductActions.FETCH_PRODUCTS_ERROR, payload: "Cannot load products"});
        }
    }
}

export const createProduct = (product: ProductModel) => {
    return async(dispatch: Dispatch<ProductActionType>) => {
        try{
            dispatch({type: ProductActions.CREATE_PRODUCT});
            const data = await addProduct(product)
            dispatch({type: ProductActions.CREATE_PRODUCT_SUCCESS, payload: data});
        }catch(error){
            dispatch({type: ProductActions.CREATE_PRODUCT_ERROR, payload: 'Cannot create product'});
        }
    }
}

export const removeProduct = (id: number) => {
    return async(dispatch: Dispatch<ProductActionType>) => {
        try{
            dispatch({type: ProductActions.DELETE_PRODUCT});
            const data = await deleteProduct(id)
            dispatch({type: ProductActions.DELETE_PRODUCT_SUCCESS, payload: data});
        }catch(error){
            dispatch({type: ProductActions.DELETE_PRODUCT_ERROR, payload: 'Cannot delete product'});
        }
    }
}

export const updateProducts = (id: number, product: ProductModel) => {
    return async (dispatch: Dispatch<ProductActionType>) => {
         try {
             dispatch({type: ProductActions.UPDATE_PRODUCT});
             const updateId = await editProduct(product,id)
             dispatch({type: ProductActions.UPDATE_PRODUCT_SUCCESS, payload: {product: product, id: updateId}});
         }catch (e) {
             dispatch({type: ProductActions.UPDATE_PRODUCT_ERROR, payload: 'Cannot update product'});
         }
    }
}