import axios from "axios";
import {Board} from "../model/Board";
import {Item} from "../model/Item";


export const getBoards = async () => {
    const boards = await axios.get<Board[]>('/soundboards');
    return boards.data;
};

export const getBoardItems = async (id: string) => {
    const board = await axios.get<Item[]>(`/soundboards/${id}/sounds`);
    return board.data;
};

export const addItem = (item: Omit<Item, "id">) => { // id is supplied by the backend
    return axios.post('/sounds', item)
};

