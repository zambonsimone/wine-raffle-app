import { LABELS } from "../labels";

interface IPurchaseButtonProps {
    selectedTicketsAmount: number;
    startPurchase: () => void;
    loading: boolean;
}

export const PurchaseButton: React.FC<IPurchaseButtonProps> = ({
    selectedTicketsAmount,
    startPurchase,
    loading
}) => {
    const isDisabled = !selectedTicketsAmount || loading;
    return (
        <button 
            disabled={isDisabled}
            onClick={startPurchase}
            className={`p-3 rounded text-black text-2xl font-bold bg-orange-400 ${isDisabled ? "opacity-50" : ""} w-[13rem] mx-auto shadow-md my-[2rem] ${selectedTicketsAmount ? "cursor-pointer" : ""}`}
        >
            {LABELS.PURCHASE.BTN(selectedTicketsAmount)}
        </button>
    )
}