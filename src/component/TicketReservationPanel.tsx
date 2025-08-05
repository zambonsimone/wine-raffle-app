import { useCallback, useRef } from "react";
import { ReceiptModal } from "./ReceiptModal";
import { PurchaseButton } from "./PurchaseButton";
import { TicketList } from "./TicketList";
import { useTickets } from "../hooks/useTickets";

export const TicketReservationPanel: React.FC = () => {
    const receiptModalRef = useRef<HTMLDialogElement>(null);
    const { purchaseTickets, selectTicket, currentSelection, clearSelection } = useTickets();

    const purchase = useCallback(async () => {
        await purchaseTickets(currentSelection);
        receiptModalRef.current?.showModal();
    },[purchaseTickets, currentSelection])
    
    return (
        <div className="mx-auto w-fit flex flex-col items-center">
            <TicketList 
                currentSelection={currentSelection}
                onSelectTicket={selectTicket}
            />
            <PurchaseButton 
                selectedTicketsAmount={currentSelection.length} 
                startPurchase={purchase}
            />
            <ReceiptModal 
                ref={receiptModalRef} 
                purchased={currentSelection}
                onClose={clearSelection}
            />
        </div>
    )
}