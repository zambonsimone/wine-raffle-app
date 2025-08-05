import { create } from 'zustand';
import { getTickets, reserve, type ITicket } from '../api/ticketsApi';

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

export const useTicketsStore = create<IStore>((set) => ({
    ...INITIAL_STATE,
    fetchTickets: async () => {
        try {
            const tickets = await getTickets();
            set({ tickets });
        } catch {
            console.error("Tickets fetch failed")
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
