import { useCallback, useEffect, useState } from "react";
import { useTicketsStore } from "../state/useTicketStore";
import type { ITicket } from "../api/models";

/**
*   Fetches the ticket list on mount
*   @returns {purchaseTickets} a function `purchaseTickets` that perform a `PUT` call for every ticket of the array provided as argument
*   @returns {selectTicket} a function `selectTicket` that save the selected ticket in a temporary list
*   @returns {currentSelection} a temporary list `currentSelection` that tracks the current ticket selection
*   @returns {clearSelection} a function `clearSelection` to clear the temporary list `currentSelection`
*/
export function useTickets(): { 
    purchaseTickets: (selection: ITicket[]) => void,
    selectTicket: (ticket: ITicket) => void,
    currentSelection: ITicket[],
    clearSelection: () => void
} {
    const { reserveTicket, fetchTickets } = useTicketsStore();
    const [currentSelection, setCurrentSelection] = useState<ITicket[]>([]);

    const purchaseTickets = useCallback(async (selection: ITicket[]) => {
        for (const tkt of selection) {
            //due to mockapi.io limits, is not possible to update multiple tickets at the same moment
            await reserveTicket(tkt);
        }
        fetchTickets();
    },[fetchTickets, reserveTicket])

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

    useEffect(() => {
        fetchTickets();
    },[fetchTickets])

    return { purchaseTickets, selectTicket, currentSelection, clearSelection }
}