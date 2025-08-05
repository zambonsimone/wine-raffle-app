import { create } from 'zustand';
import { getTickets, reserve } from '../api/ticketsApi';
import type { ITicket } from '../api/models';

interface IState {
    tickets: ITicket[];
}

interface IStore extends IState {
    fetchTickets: () => Promise<void>;
    reserveTicket: (ticket: ITicket) => Promise<void>;
};

const INITIAL_STATE: IState = {
    tickets: [],
}

/**
 * Zustand store for managing ticket data and related actions.
 *
 * This store exposes:
 * - A list of tickets (`tickets`)
 * - An async function `fetchTickets` to fetch tickets from the server
 * - An async function `reserveTicket` to reserve a ticket
 */
export const useTicketsStore = create<IStore>((set) => ({
    ...INITIAL_STATE,
    fetchTickets: async () => {
        try {
            const tickets = await getTickets();
            set({ tickets });
        } catch (err) {
            console.error("Tickets fetch failed")
            console.log(err);
        }
    },
    reserveTicket: async (ticket: ITicket) => {
        try {
            await reserve({ ...ticket, reserved: true }); 
        } catch (err) {
            console.error("Ticket purchase failed");
            console.log(err);
        }
    },
}));
