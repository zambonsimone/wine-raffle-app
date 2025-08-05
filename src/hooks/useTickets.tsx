import { useCallback, useEffect } from "react";
import { useTicketsStore } from "../state/useTicketStore";
import type { ITicket } from "../api/models";

export function useTickets() {
    const { reserveTicket, fetchTickets } = useTicketsStore();

    const purchaseTickets = useCallback(async (selection: ITicket[]) => {
        for (const tkt of selection) {
            //due to mockApi limits, is not possible to update multiple tickets at the same moment
            await reserveTicket(tkt);
        }
        fetchTickets();
    },[fetchTickets, reserveTicket])

    useEffect(() => {
        fetchTickets();
    },[fetchTickets])

    return { purchaseTickets }
}