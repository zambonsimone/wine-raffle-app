import type { ITicket } from "../api/ticketsApi";
import { useTicketsStore } from "../state/useTicketStore";
import { Ticket } from "./Ticket";

interface ITicketListProps {
    currentSelection: ITicket[];
    onSelectTicket: (selectedTicket: ITicket) => void;
}

export const TicketList: React.FC<ITicketListProps> = ({
    currentSelection,
    onSelectTicket
}) => {
    const { tickets } = useTicketsStore();
    
    return (
        <div className="grid grid-cols-10 gap-2">
            { tickets.map(ticket => (
                <Ticket 
                    ticket={ticket} 
                    onSelect={onSelectTicket} 
                    isSelected={currentSelection.indexOf(ticket) > -1}
                />
            ))}
        </div>
    )
}