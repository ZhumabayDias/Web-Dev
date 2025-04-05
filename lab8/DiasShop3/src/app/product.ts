export interface Product {
    id: number;
    category: string;
    name: string;
    description: string;
    rating: number;
    images: string[];
    selectedImage?: string;
    link: string;
    like: number
}
