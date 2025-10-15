import { ThemeProvider } from "./providers/ThemeProvider";
import { UserProvider } from './providers/UserProvider';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <Dashboard />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App;

