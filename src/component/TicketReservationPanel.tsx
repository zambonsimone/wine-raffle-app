import { useCallback, useRef, useState } from "react";
import { ReceiptModal } from "./ReceiptModal";
import { PurchaseButton } from "./PurchaseButton";
import { TicketList } from "./TicketList";
import { useTicketsStore, type ITicket } from "../state/useTicketStore";

export const TicketReservationPanel: React.FC = () => {
    const [selection, setSelection] = useState<ITicket[]>([]);
    const receiptModalRef = useRef<HTMLDialogElement>(null);
    const { setTickets, tickets } = useTicketsStore();

    const selectTicket = useCallback((selectedTicket: ITicket) => {
        const newSelection = [...selection];
        const selectedTicketIndex = newSelection.indexOf(selectedTicket);
        if (selectedTicketIndex > -1) newSelection.splice(selectedTicketIndex,1);
        else newSelection.push(selectedTicket); 
        setSelection(newSelection);
    },[selection])

    const purchase = useCallback(() => {
        receiptModalRef.current?.showModal();
        const newTickets = [...tickets];
        newTickets.forEach(tkt => {
            //if the ticket object was complex, I would loop over id arrays
            if (selection.includes(tkt)) tkt.reserved = true
        })
        setTickets(newTickets);

    },[selection, setTickets, tickets])
    
    return (
        <div>
            <TicketList 
                currentSelection={selection}
                onSelectTicket={selectTicket}
            />
            <PurchaseButton 
                selectedTicketsAmount={selection.length} 
                startPurchase={purchase}
            />
            <ReceiptModal 
                ref={receiptModalRef} 
                purchased={selection}
                clearSelection={() => setSelection([])}
            />
        </div>
    )
}