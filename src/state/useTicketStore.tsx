import { create } from 'zustand';

export interface ITicket {
    id: number;
    reserved: boolean;
};

interface IState {
    tickets: ITicket[];
    myTickets: ITicket[];
}

interface IStore extends IState {
  setTickets: (tickets: ITicket[]) => void;
};

const INITIAL_STATE: IState = {
    tickets: Array.from({ length: 100 }, (_,i) => ({ id: i, reserved: false })),
    myTickets: []
}

export const useTicketsStore = create<IStore>((set) => ({
  ...INITIAL_STATE,
  setTickets: (tickets) => set({ tickets }),
}));