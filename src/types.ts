export interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    steps: string[];
    image: string;
    mealType: string;
    rating: number;
}