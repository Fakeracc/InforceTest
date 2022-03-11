import {ProductActions, ProductActionType, ProductState} from "../../models/ActionTypes/ProductActions";
import {ProductModel} from "../../models/product.model";

const initialState: ProductState = {
   products: [],
   loading: false,
   error: null
}

const productReducer = (state = initialState, action: ProductActionType) => {
   switch (action.type){
       case ProductActions.FETCH_PRODUCTS:
           return {loading: true, error: null, products: state.products}

       case ProductActions.FETCH_PRODUCTS_SUCCESS:
           return {loading: false, error: null, products: action.payload}

       case ProductActions.FETCH_PRODUCTS_ERROR:
           return {loading: false, error: action.payload, products: state.products}

       case ProductActions.CREATE_PRODUCT:
           return {loading: true, error: null, products: state.products}

       case ProductActions.CREATE_PRODUCT_SUCCESS:
           return {loading: false, error: null, products: [action.payload,...state.products]}

       case ProductActions.CREATE_PRODUCT_ERROR:
           return {loading: false, error: action.payload, products: state.products}

       case ProductActions.DELETE_PRODUCT:
           return {loading: true, error: null, products: state.products}

       case ProductActions.DELETE_PRODUCT_SUCCESS:
           const filteredProducts = state.products.filter((product: ProductModel) => product.id !== action.payload)
           return {loading: false, error: null, products: filteredProducts}

       case ProductActions.UPDATE_PRODUCT:
           return {loading: true, error: null, products: state.products}

       case ProductActions.UPDATE_PRODUCT_SUCCESS:
           //const productById = state.products.filter((product: ProductModel) => product.id === action.payload.id)[0];
           return {loading: false, error: null, products: state.products}

       case ProductActions.UPDATE_PRODUCT_ERROR:
           return {loading: false, error: action.payload, products: state.products}

       default:
           return state;
   }
}

export {
    productReducer
}
