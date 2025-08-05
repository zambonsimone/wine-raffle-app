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
        <div className="grid grid-cols-[repeat(4,_minmax(0,_6rem))] lg:grid-cols-[repeat(8,_minmax(0,_6rem))] md:grid-cols-[repeat(6,_minmax(0,_6rem))] sm:grid-cols-[repeat(5,_minmax(0,_6rem))] gap-[2vw]">
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