import { useCallback, useRef, useState } from "react";
import { ReceiptModal } from "./ReceiptModal";
import { PurchaseButton } from "./PurchaseButton";
import { TicketList } from "./TicketList";
import { usePurchaseTickets } from "../hooks/usePurchaseTicket";
import type { ITicket } from "../api/ticketsApi";

export const TicketReservationPanel: React.FC = () => {
    const [selection, setSelection] = useState<ITicket[]>([]);
    const receiptModalRef = useRef<HTMLDialogElement>(null);
    const { purchaseTickets } = usePurchaseTickets();

    const selectTicket = useCallback((selectedTicket: ITicket) => {
        const newSelection = [...selection];
        const selectedTicketIndex = newSelection.indexOf(selectedTicket);
        if (selectedTicketIndex > -1) newSelection.splice(selectedTicketIndex,1);
        else newSelection.push(selectedTicket); 
        setSelection(newSelection);
    },[selection])

    const purchase = useCallback(async () => {
        receiptModalRef.current?.showModal();
        purchaseTickets(selection);
    },[purchaseTickets, selection])
    
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