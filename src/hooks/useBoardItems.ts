import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {addItem, getBoardItems} from "../services/BoardDataService";
import {Item} from "../model/Item";

export function useBoardItems(boardId: string) {
    const queryClient = useQueryClient();
    const {
        isLoading,
        isError,
        data: items,
    } = useQuery(["items"], () => getBoardItems(boardId));

    const {
        mutate,
        isLoading: isAddingItem,
        isError: isErrorAddingItem,
    } = useMutation(
        (item: Omit<Item, "id">) => addItem(item),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(["items"]);
            },
        }
    );

    return {
        isLoading,
        isError,
        items,
        addItemMutation: mutate,
        isAddingItem,
        isErrorAddingItem,
    };
}
