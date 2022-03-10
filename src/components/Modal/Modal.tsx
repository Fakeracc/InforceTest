import React, {useState} from 'react';
import Modal from 'react-modal';
import {ProductModel} from "../../models/product.model";
import Input from "../custom/Input/Input";
import styles from './Modal.module.scss'
import {addProduct} from "../../api/products/productsRequests";


interface ModalProps{
    show: boolean;
    onHide: () => void;
    addProductModal?: (product: Omit<ProductModel, "id">) => Promise<number>;
    updateProductModal?: (product: ProductModel) => Promise<number>;
    products: ProductModel[];
    [key: string]: any;
}

const ProductModal: React.FC<ModalProps> = ({show,onHide,products, setProducts}) => {
    const [name,setName] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');
    const [count, setCount] = useState<any>();
    const [width, setWidth] = useState<any>();
    const [height, setHeight] = useState<any>();
    const [weight, setWeight] = useState<string>('');
    const [comments, setComments] = useState([])

    const newProduct: Omit<ProductModel, "id"> = {
        name: name,
        imageUrl: imageUrl,
        count: count,
        size: {
            width: width,
            height: height
        },
        weight: weight,
        comments: comments
    };

    const addProductHandle = async () => {
        await addProduct(newProduct);
        setProducts(products.unshift(newProduct as ProductModel))
        onHide();
    };

    return (
       <Modal
           isOpen={show}
           className={styles.modal}
       >
           <Input title={"Name"} type="text" placeholder={"Name..."} onChange={(e: any) => setName(e.target.value)} value={name}/>
           <Input title={"Image"} type="text" placeholder={"Image url..."} onChange={(e: any) => setImageUrl(e.target.value)} value={imageUrl}/>
           <Input title={"Count"} type="number" placeholder={"Count..."} onChange={(e: any) => setCount(e.target.value)} value={count}/>
           <Input title={"Width"} type="number" placeholder={"Width..."} onChange={(e: any) => setWidth(e.target.value)} value={width}/>
           <Input title={"Height"} type="number" placeholder={"Height..."} onChange={(e: any) => setHeight(e.target.value)} value={height}/>
           <Input title={"Weight"} placeholder={"Weight..."} type="text" onChange={(e: any) => setWeight(e.target.value)} value={weight}/>
           <button onClick={addProductHandle}>Create product</button>
           <button onClick={onHide}>Close modal</button>
       </Modal>
    );
}

export default ProductModal