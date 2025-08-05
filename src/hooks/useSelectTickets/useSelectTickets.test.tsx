import { renderHook, act, waitFor } from "@testing-library/react";
import { useSelectTickets } from "./useSelectTickets";
import type { ITicket } from "../../api/models";

const TICKETS: ITicket[] = [
    { id: 1, reserved: false },
    { id: 2, reserved: false },
    { id: 3, reserved: false}
]

describe("useSelectTickets hook", () => {
    it("should initialize an empty selection array", () => {
        const { result } = renderHook(useSelectTickets);
        expect(result.current.currentSelection.length).toBe(0)
    });
    it("should add and remove tickets to the temporary selection list", async () => {
        const { result } = renderHook(useSelectTickets);
        act(() => result.current.selectTicket(TICKETS[0]))
        await waitFor(() => expect(result.current.currentSelection).toStrictEqual([TICKETS[0]]));
        act(() => result.current.selectTicket(TICKETS[1]))
        await waitFor(() => expect(result.current.currentSelection).toStrictEqual([TICKETS[0], TICKETS[1]]));
        act(() => result.current.selectTicket(TICKETS[0]))
        await waitFor(() => expect(result.current.currentSelection).toStrictEqual([TICKETS[1]]));
    });
    it("should clear the temporary list", async () => {
        const { result } = renderHook(useSelectTickets);
        act(() => result.current.selectTicket(TICKETS[0]));
        act(() => result.current.selectTicket(TICKETS[1]));
        act(() => result.current.selectTicket(TICKETS[3]));
        await waitFor(() => expect(result.current.currentSelection.length).toBe(3));
        act(() => result.current.clearSelection());
        await waitFor(() => expect(result.current.currentSelection.length).toBe(0));
    })
})