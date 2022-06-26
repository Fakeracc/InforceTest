import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import {ProductModel} from "../../models/product.model";
import Input from "../custom/Input/Input";
import styles from './ProductModal.module.scss'
import {CommentsModel} from "../../models/comments.model";
import {useActions} from "../../hooks/reduxHooks";


interface ModalProps{
    show: boolean;
    onHide: () => void;
    addProductModal?: (product: Omit<ProductModel, "id">) => Promise<number>;
    updateProductModal?: (product: ProductModel) => Promise<number>;
    products: ProductModel[];
    editProduct: ProductModel;
    [key: string]: any;
}

const ProductModal: React.FC<ModalProps> = ({show,onHide,products, editProduct}) => {
    const [name,setName] = useState<string>('');
    const [imageUrl, setImageUrl] = useState<string>('');
    const [count, setCount] = useState<number | null>();
    const [width, setWidth] = useState<number | null>();
    const [height, setHeight] = useState<number | null>();
    const [weight, setWeight] = useState<string>('');
    const [comments, setComments] = useState<CommentsModel[]>([]);
    const {createProduct, updateProducts} = useActions();

    Modal.setAppElement('#root');

    const requestProduct: ProductModel = {
        id: products.length + 1,
        name: name,
        imageUrl: imageUrl,
        count: count ? count : 0,
        size: {
            width: width ? width : 0,
            height: height ? height : 0
        },
        weight: weight,
        comments: comments
    };

    const clearProductState = () => {
       setName('');
       setImageUrl('');
       setCount(null);
       setWidth(null);
       setHeight(null);
       setWeight('');
       setComments([]);
    };

    const setEditProduct = () => {
        setName(editProduct.name);
        setImageUrl(editProduct.imageUrl);
        setCount(editProduct.count);
        setWidth(editProduct.size.width);
        setHeight(editProduct.size.height);
        setWeight(editProduct.weight);
    }

    const updateProductHandle = () => {
            updateProducts(editProduct.id, requestProduct);
            onHide();
    };

    const addProductHandle = async () => {
       if(
           requestProduct.name.trim() &&
           requestProduct.imageUrl.trim() &&
           requestProduct.count > 0 &&
           requestProduct.size.width &&
           requestProduct.size.height &&
           requestProduct.weight.trim()
       ) {
           createProduct(requestProduct);
           clearProductState();
        }
        onHide();
    };

    const setNumberHandle = (event: any, setStateAction: (event: any) => void) => {
        if(event?.target?.value < 0 || event.target.value[0] === 0){
            return
        }
        setStateAction(event?.target?.value)
    };


    useEffect(() => {
        if(editProduct){
            setEditProduct();
        }
        //eslint-disable-next-line
    }, [editProduct]);

    return (
       <Modal
           isOpen={show}
           className={styles.modal}
       >
           <Input title={"Name"} type="text" placeholder={"Name..."} onChange={(e: any) => setName(e.target.value)} value={name}/>
           <Input title={"Image"} type="text" placeholder={"Image url..."} onChange={(e: any) => setImageUrl(e.target.value)} value={imageUrl}/>
           <Input title="Count" type="number" placeholder="Count..." onChange={(e: any) => setNumberHandle(e, setCount)} value={count}/>
           <Input title={"Width"} type="number" placeholder={"Width..."} onChange={(e: any) => setNumberHandle(e, setWidth)} value={width}/>
           <Input title={"Height"} type="number" placeholder={"Height..."} onChange={(e: any) => setNumberHandle(e, setHeight)} value={height}/>
           <Input title={"Weight"} placeholder={"Weight..."} type="text" onChange={(e: any) => setWeight(e.target.value)} value={weight}/>
           <button onClick={() => editProduct ? updateProductHandle() : addProductHandle()}>{editProduct ? "Edit product" : "Create product"}</button>
           <button onClick={onHide}>Close modal</button>
       </Modal>
    );
}

export default ProductModal