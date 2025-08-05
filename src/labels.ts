export const LABELS = {
    PAGE_HEADER: {
        TITLE: "Wine Raffle",
        SUBTITLE: "Purchase at least one ticket to enter the lottery"
    },
    DEFINITION_LIST: {
        NOT_AVAILABLE: "NOT Available",
        AVAILABLE: "Available",
        SELECTED: "Selected"
    },
    PURCHASE: {
        BTN: (selectedTicketsAmount: number) => `Buy (${selectedTicketsAmount})`,
        RECEIPT_TITLE: "Receipt",
        RECEIPT_ITEM: "Ticket N."
    }
}