import './App.css'
import { DefinitionList } from './component/DefinitionList'
import { TicketReservationPanel } from './component/TicketReservationPanel'
import { LABELS } from './labels'

const { TITLE, SUBTITLE } = LABELS.PAGE_HEADER;

export const App: React.FC = () => {
    return (
        <main className="w-fit px-[2rem] mx-auto md:my-[2rem] bg-gray-200 shadow-md rounded">
            <h1 className="text-3xl font-bold mb-4 text-center pt-[2rem] pb-[0.5rem]">{TITLE}</h1>
            <h2 className="text-2xl font-medium mb-4 text-center pt-[0.2rem] pb-[2rem]">{SUBTITLE}</h2>
            <DefinitionList />
            <TicketReservationPanel />
        </main>
    )
  
}
