import { renderHook, waitFor, act } from "@testing-library/react";
import { useTickets } from "./useTickets";
import * as store from "../../state/useTicketStore";
import type { ITicket } from "../../api/models";

const fetchTicketsFn = jest.fn();
const reserveTicketFn = jest.fn();

const TICKETS: ITicket[] = [
    { id: 1, reserved: false },
    { id: 2, reserved: false },
    { id: 3, reserved: false}
]

describe("useTickets hook", () => {
    it("should fetch tickets on mount", async () => {
        jest.spyOn(store, "useTicketsStore").mockImplementation(() => ({
            fetchTickets: fetchTicketsFn,
        }));
        renderHook(useTickets);
        await waitFor(() => expect(fetchTicketsFn).toHaveBeenCalledTimes(1));
    })
    it("should purchase new tickets", async () => {
        jest.spyOn(store, "useTicketsStore").mockImplementation(() => ({
            fetchTickets: fetchTicketsFn,
            reserveTicket: reserveTicketFn
        }));
        const { result } = renderHook(useTickets);
        act(() => result.current.purchaseTickets(TICKETS));
        await waitFor(() => expect(reserveTicketFn).toHaveBeenCalledTimes(3))
        await waitFor(() => expect(fetchTicketsFn).toHaveBeenCalledTimes(2))
    })
})