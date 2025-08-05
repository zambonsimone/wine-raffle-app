import { useCallback } from "react";
import type { ITicket } from "../state/useTicketStore";

interface ITicketProps {
    ticket: ITicket;
    onSelect: (ticket: ITicket) => void;
    isSelected: boolean;
}

export const Ticket: React.FC<ITicketProps> = ({
    ticket,
    onSelect,
    isSelected
}) => {
    const { reserved, id } = ticket;
    const onClick = useCallback(() => {
        onSelect(ticket);
    },[onSelect, ticket])

    const bgColor = reserved 
        ? "bg-red-400"
        : isSelected
            ? "bg-blue-400"
            : "bg-green-400"

    return (
        <button
            key={id}
            className={`p-2 rounded text-white ${bgColor}`}
            disabled={reserved}
            onClick={onClick}
        >
            {id}
        </button>
    )
}