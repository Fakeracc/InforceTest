import {ProductModel} from "../product.model";

export interface ProductState {
    products: ProductModel[];
    loading: boolean;
    error: string | null;
}

export enum ProductActions{
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
    CREATE_PRODUCT = 'CREATE_PRODUCT',
    CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS',
    CREATE_PRODUCT_ERROR = 'CREATE_PRODUCT_ERROR',
    UPDATE_PRODUCT = 'UPDATE_PRODUCT',
    UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS',
    UPDATE_PRODUCT_ERROR = 'UPDATE_PRODUCT_ERROR',
    DELETE_PRODUCT = "DELETE_PRODUCT",
    DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS",
    DELETE_PRODUCT_ERROR = "DELETE_PRODUCT_ERROR"
}

interface FetchProductAction {
    type: ProductActions.FETCH_PRODUCTS;
}

interface FetchProductSuccessAction {
    type: ProductActions.FETCH_PRODUCTS_SUCCESS;
    payload: ProductModel[];
}

interface FetchProductErrorAction {
    type: ProductActions.FETCH_PRODUCTS_ERROR;
    payload: string;
}


interface CreateProductAction {
    type: ProductActions.CREATE_PRODUCT;
}

interface CreateProductSuccessAction{
    type: ProductActions.CREATE_PRODUCT_SUCCESS;
    payload: ProductModel;
}

interface CreateProductErrorAction{
    type: ProductActions.CREATE_PRODUCT_ERROR;
    payload: string;
}

interface UpdateProductAction{
    type: ProductActions.UPDATE_PRODUCT;
}

interface UpdateProductSuccessAction{
    type: ProductActions.UPDATE_PRODUCT_SUCCESS;
    payload: {
        product: ProductModel,
        id: number
    };
}

interface UpdateProductErrorAction{
    type: ProductActions.UPDATE_PRODUCT_ERROR;
    payload: string;
}

interface DeleteProductAction{
    type: ProductActions.DELETE_PRODUCT;
}

interface DeleteProductSuccessAction{
    type: ProductActions.DELETE_PRODUCT_SUCCESS;
    payload: number;
}
interface DeleteProductErrorAction{
    type: ProductActions.DELETE_PRODUCT_ERROR;
    payload: string;
}

export type ProductActionType =
    CreateProductAction |
    CreateProductSuccessAction |
    CreateProductErrorAction |
    UpdateProductAction |
    UpdateProductSuccessAction |
    UpdateProductErrorAction |
    DeleteProductAction |
    DeleteProductSuccessAction |
    DeleteProductErrorAction |
    FetchProductAction |
    FetchProductSuccessAction |
    FetchProductErrorAction;

