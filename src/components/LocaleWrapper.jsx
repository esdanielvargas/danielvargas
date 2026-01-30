import { Outlet, useParams } from "react-router-dom";
import { IntlayerProvider } from "react-intlayer";

export const LocaleWrapper = () => {
  const { locale } = useParams();
  
  return (
    <IntlayerProvider locale={locale}>
      <Outlet />
    </IntlayerProvider>
  );
};