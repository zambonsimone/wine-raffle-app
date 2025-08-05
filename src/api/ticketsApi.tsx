import { API_BASE } from "./constants";
import type { ITicket } from "./models";

/**
 *  Fetches the ticket list from mockapi.io
 *  @returns {Promise<ITicket[]>} A promise that resolves with an array of ITicket
 */
export async function getTickets(): Promise<ITicket> {
    const response = await fetch(`${API_BASE}/tickets`, {
        method: "GET"
    });
    return await response.json();
}

/**
*   Perform a PUT call to change the state "reserved" of the ticket from "false" to "true"
*   @param {ITicket} ticket - The ticket to reserve.
*   @returns {Promise<void>}
 */
export async function reserve(ticket: ITicket): Promise<void> {
    await fetch(`${API_BASE}/tickets/${ticket.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reserved: true })
    });
}