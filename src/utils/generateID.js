export function generateID({ type, length, prefix = "", suffix = "" }) {
  if (type === "uuid") {
    return prefix + crypto.randomUUID() + suffix;
  }

  let chars = "";
  if (type === "alphanumeric") chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  if (type === "numeric") chars = "0123456789";
  if (type === "letters") chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return prefix + result + suffix;
}
