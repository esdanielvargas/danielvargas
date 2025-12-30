import { exchangeRates } from "./exchangeRates";

// Función para convertir precios
export function convertPrice(price, from, to) {
  // Validar el precio
  if (typeof price !== "number" || isNaN(price) || price < 0) {
    throw new Error("El precio debe ser un número válido y no negativo.");
  }

  // Validar la moneda
  if (!exchangeRates[from] || !exchangeRates[to]) {
    throw new Error(
      `Moneda no soportada: ${from} -> ${to}. Las monedas disponibles son: ${Object.keys(
        exchangeRates
      ).join(", ")}`
    );
  }

  // Obtener datos de la moneda
  // const { rate, symbol, decimal, code } = exchangeRates[from] || exchangeRates[to];

  // Calcular precio convertido
  // const convertedPrice = price * rate;
  const priceInUSD = price / exchangeRates[from].rate;
  const convertedPrice = priceInUSD * exchangeRates[to].rate;

  // Formatear el precio con el símbolo y el número correcto de decimales
  return `${exchangeRates[to].symbol}${convertedPrice.toFixed(exchangeRates[to].decimal)} ${exchangeRates[to].code}`;
}
