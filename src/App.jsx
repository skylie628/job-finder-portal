import AppProvider from "./providers/app.jsx";
import { AppRoutes } from "./routes";
function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
