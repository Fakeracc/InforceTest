import axios, {AxiosResponse} from "axios";
import {ProductModel} from "../../models/product.model";

const getProducts = async (): Promise<ProductModel[]> => {
    const response = await axios.get('https://6228c2299fd6174ca82e7fe6.mockapi.io/api/market');
    return response.data;
}

const addProduct = async (product: ProductModel): Promise<ProductModel> => {
    await axios.post('https://6228c2299fd6174ca82e7fe6.mockapi.io/api/market',{
        ...product,
    });
    return product;
}

const editProduct = async (product: ProductModel, id: number): Promise<number> => {
    const response = await axios.put(`https://6228c2299fd6174ca82e7fe6.mockapi.io/api/market/${id}`,{
        ...product,
    });
    return response.data.id;
};

const deleteProduct = async (id: number): Promise<number> => {
    const response = await axios.delete(`https://6228c2299fd6174ca82e7fe6.mockapi.io/api/market/${id}`);
    return response.data.id;
}

export {
    getProducts,
    addProduct,
    editProduct,
    deleteProduct
}
