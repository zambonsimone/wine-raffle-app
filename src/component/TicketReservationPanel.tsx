import { useCallback, useRef, useState } from "react";
import { ReceiptModal } from "./ReceiptModal";
import { PurchaseButton } from "./PurchaseButton";
import { TicketList } from "./TicketList";
import { useTickets } from "../hooks/useTickets";
import type { ITicket } from "../api/models";

export const TicketReservationPanel: React.FC = () => {
    const [selection, setSelection] = useState<ITicket[]>([]);
    const receiptModalRef = useRef<HTMLDialogElement>(null);
    const { purchaseTickets } = useTickets();

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
        <div className="mx-auto w-fit flex flex-col items-center">
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