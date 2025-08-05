import type { ITicket } from "../api/models";
import { useTicketsStore } from "../state/useTicketStore";
import { Ticket } from "./Ticket";

interface ITicketListProps {
    currentSelection: ITicket[];
    onSelectTicket: (selectedTicket: ITicket) => void;
    loading: boolean;
}

const gridMobile = "grid-cols-[repeat(4,_minmax(0,_6rem))]";
const gridTablet = "grid-cols-[repeat(5,_minmax(0,_6rem))]";
const gridDesktop = "grid-cols-[repeat(6,_minmax(0,_6rem))]";
const gridFull = "grid-cols-[repeat(8,_minmax(0,_6rem))]";
const gridResponsiveTemplate = `grid ${gridMobile} lg:${gridFull} md:${gridDesktop} sm:${gridTablet} gap-[2vw]`;

export const TicketList: React.FC<ITicketListProps> = ({
    currentSelection,
    onSelectTicket,
    loading
}) => {
    const { tickets } = useTicketsStore();

    return (
        <div className={`${gridResponsiveTemplate} ${loading ? "opacity-30" : ""}`}>
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