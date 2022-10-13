import {Item} from "./Item";

export interface Board {
    id: string;
    name: string;
    image: string;
    items: Item[];
}
