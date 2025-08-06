import { useCallback } from "react";
import type { ITicket } from "../api/models";

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
        ? "bg-red-400 opacity-50"
        : isSelected
            ? "bg-blue-400"
            : "bg-green-400"

    return (
        <button
            key={id}
            className={`cursor-pointer p-2 text-grey ${bgColor} font-mono w-full h-[3rem] justify-self-center ${reserved ? "pointer-events-none" : ""} border border-transparent hover:border-blue-400 border-[0.1rem] shadow-md`}
            disabled={reserved}
            onClick={onClick}
        >
            <span className="inline-flex items-center justify-center border border-dashed w-full h-full">{id}</span>
        </button>
    )
}