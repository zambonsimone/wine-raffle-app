import { useCallback, useState } from "react";
import type { ITicket } from "../api/models";

/**
*   Handle the temporary selection of the tickets
* 
*   @returns {selectTicket} a function `selectTicket` that save the selected ticket in a temporary list
*   @returns {currentSelection} a temporary list `currentSelection` that tracks the current ticket selection
*   @returns {clearSelection} a function `clearSelection` to clear the temporary list `currentSelection`
*/
export function useSelectTickets(): {
    selectTicket: (ticket: ITicket) => void,
    clearSelection: () => void,
    currentSelection: ITicket[]
} {
    const [currentSelection, setCurrentSelection] = useState<ITicket[]>([]);

    const selectTicket = useCallback((selectedTicket: ITicket) => {
        const newSelection = [...currentSelection];
        const selectedTicketIndex = newSelection.indexOf(selectedTicket);
        if (selectedTicketIndex > -1) newSelection.splice(selectedTicketIndex,1);
        else newSelection.push(selectedTicket); 
        setCurrentSelection(newSelection);
    },[currentSelection])

    const clearSelection = useCallback(() => {
        setCurrentSelection([]);
    },[])

    return { selectTicket, currentSelection, clearSelection }
}