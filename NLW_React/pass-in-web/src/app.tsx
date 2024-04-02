import { AttendeeList } from "./components/attendee-list";
import { Header } from "./components/header";

/**
 * The main App component.
 * @returns The rendered App component.
 */
export function App() {
  return (
    <div className="flex gap-2">
      <Header />
      <AttendeeList />
    </div>
  );
}
