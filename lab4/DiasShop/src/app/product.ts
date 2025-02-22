export interface Product {
    id: number;
    name: string;
    description: string;
    rating: number;
    images: string[];
    selectedImage?: string;
    link: string;
}
