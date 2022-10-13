import {useQuery} from '@tanstack/react-query'
import {getBoards} from "../services/BoardDataService";

export function useBoards() {
    const {
        isLoading,
        isError,
        data: boards,
    } = useQuery(["boards"], getBoards);

    return {
        isLoading,
        isError,
        boards
    }

}