
export interface CommentsModel{
    id: number;
    productId: number | string;
    description: string;
    date: Date;
}

export interface ProductModel{
    id: number | string;
    imageUrl: string;
    name: string;
    count: number;
    size: {
        width: number;
        height: number;
    };
    weight: string;
    comments?: CommentsModel[];
}