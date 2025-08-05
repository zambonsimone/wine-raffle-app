export interface ITicket {
    id: number;
    reserved: boolean;
};

const API_BASE = "https://6891e9cb447ff4f11fbe4d37.mockapi.io/raffle-tickets";

export async function getTickets() {
    const response = await fetch(`${API_BASE}/tickets`, {
        method: "GET"
    });
    const tickets: ITicket[] = await response.json();
    return tickets;
}

export async function reserve(ticket: ITicket) {
    const response = await fetch(`${API_BASE}/tickets/${ticket.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reserved: true })
    });
    const result = await response.json();
    return result;
}