import { localeMap } from "intlayer";
import { IntlayerProvider } from "react-intlayer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

/**
 * Un componente de enrutador que configura rutas específicas por configuración regional.
 * Utiliza React Router para gestionar la navegación y renderizar componentes localizados.
 */
export const LocaleRouter = ({ children }) => (
  <BrowserRouter>
    <Routes>
      {localeMap(({ locale, urlPrefix }) => (
        <Route
          // Patrón de ruta para capturar la localidad (por ejemplo, /en/, /fr/)
          // y coincidir con todas las rutas subsecuentes (/*)
          path={`${urlPrefix}/*`}
          key={locale}
          element={
            <IntlayerProvider locale={locale}>
              {children}
            </IntlayerProvider>
          } 
        />
      ))}
    </Routes>
  </BrowserRouter>
);