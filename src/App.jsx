import { BrowserRouter } from "react-router-dom";
import { IntlayerProvider } from "react-intlayer";
import AppRoutes from "./routes";

function App() {
  return (
    <IntlayerProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </IntlayerProvider>
  );
}

export default App;
