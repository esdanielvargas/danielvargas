import { exchangeRates } from "./exchangeRates";

// Función para convertir precios
export function convertPrices(price, currency) {
  // Validar el precio
  if (typeof price !== "number" || isNaN(price) || price < 0) {
    throw new Error("El precio debe ser un número válido y no negativo.");
  }

  // Validar la moneda
  if (!exchangeRates[currency]) {
    throw new Error(`Moneda no soportada: ${currency}. Las monedas disponibles son: ${Object.keys(exchangeRates).join(", ")}`);
  }

  // Obtener datos de la moneda
  const { rate, symbol, decimal } = exchangeRates[currency];

  // Calcular precio convertido
  const convertedPrice = price * rate;

  // Formatear el precio con el símbolo y el número correcto de decimales
  return `${symbol}${convertedPrice.toFixed(decimal)}`;
}