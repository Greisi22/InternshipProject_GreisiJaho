export interface Restaurant {
    category: string[];
    name: string;
    discount: number;
    images: string[];
}

type HandleRestorantsFunction = (category: string) => void;

export interface NavBarProps {
    handleRestorants: HandleRestorantsFunction;
}