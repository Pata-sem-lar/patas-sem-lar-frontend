import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Removes empty string and undefined fields before sending to the API.
 * @example
 * stripEmpty({ nome: "Salão do Jessé", cidade: "Vila Nova", logo_url: "" })
 * // => { nome: "Salão do Jessé", cidade: "Vila Nova" }
 */
export function stripEmpty<T extends Record<string, unknown>>(obj: T) {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== "" && v !== undefined));
}
