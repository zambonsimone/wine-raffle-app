import { useCallback, useRef } from "react";
import { ReceiptModal } from "./ReceiptModal";
import { PurchaseButton } from "./PurchaseButton";
import { TicketList } from "./TicketList";
import { useTickets } from "../hooks/useTickets";
import { useSelectTickets } from "../hooks/useSelectTickets";
import { Loading } from "./Loading";

export const TicketReservationPanel: React.FC = () => {
    const receiptModalRef = useRef<HTMLDialogElement>(null);
    const { purchaseTickets, loading } = useTickets();
    const { selectTicket, currentSelection, clearSelection } = useSelectTickets();

    const purchase = useCallback(async () => {
        await purchaseTickets(currentSelection);
        receiptModalRef.current?.showModal();
    },[purchaseTickets, currentSelection])
    
    return (
        <div className="mx-auto w-fit flex flex-col items-center">
            { loading && <Loading />}
            <TicketList 
                currentSelection={currentSelection}
                onSelectTicket={selectTicket}
                loading={loading}
            />
            <PurchaseButton 
                selectedTicketsAmount={currentSelection.length} 
                startPurchase={purchase}
                loading={loading}
            />
            <ReceiptModal 
                ref={receiptModalRef} 
                purchased={currentSelection}
                onClose={clearSelection}
            />
        </div>
    )
}