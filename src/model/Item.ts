export interface Item {
    id: string;
    soundboardId: string;
    name: string;
    quote: string;
    image: string;
    sound: string;
}
 export type ItemData = Omit<Item, "id" | "soundboardId">;
 