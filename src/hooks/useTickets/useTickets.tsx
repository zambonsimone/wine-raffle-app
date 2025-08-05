import { useCallback, useEffect, useState } from "react";
import { useTicketsStore } from "../../state/useTicketStore";
import type { ITicket } from "../../api/models";

/**
*   Fetches the ticket list on mount
* 
*   @returns {purchaseTickets} a function `purchaseTickets` that perform a `PUT` call for every ticket of the array provided as argument
*   @returns {loading} a state `loading` that indicates the pending state of the tickets fetch or purchase
*/
export function useTickets(): { 
    purchaseTickets: (selection: ITicket[]) => void,
    loading: boolean
} {
    const { reserveTicket, fetchTickets } = useTicketsStore();
    const [loading, setLoading] = useState(false);

    const purchaseTickets = useCallback(async (selection: ITicket[]) => {
        setLoading(true);
        for (const tkt of selection) {
            //due to mockapi.io limits, is not possible to update multiple tickets at the same moment
            await reserveTicket(tkt);
        }
        await fetchTickets();
        setLoading(false);
    },[fetchTickets, reserveTicket])

    useEffect(() => {
        async function getTickets() { 
            setLoading(true);
            await fetchTickets();
            setLoading(false);
        };
        getTickets();
    },[fetchTickets])

    return { purchaseTickets, loading }
}