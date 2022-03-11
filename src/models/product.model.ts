import {CommentsModel} from "./comments.model";

export interface ProductModel{
    id: number;
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