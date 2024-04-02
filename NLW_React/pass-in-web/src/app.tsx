import { AttendeeList } from "./components/attendee-list";
import { Header } from "./components/header";

/**
 * The main App component.
 * @returns The rendered App component.
 */
export function App() {
  return (
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
      <Header />
      <AttendeeList />
    </div>
  );
}
