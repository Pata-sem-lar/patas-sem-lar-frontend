import type { StoreDTO } from "@/types/api";
import api from "./axios";

export async function getMyStores(): Promise<StoreDTO[]> {
  const { data } = await api.get<StoreDTO[]>("/me/stores");
  return data;
}
