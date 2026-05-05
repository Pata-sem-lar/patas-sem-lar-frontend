import { useQuery } from "@tanstack/react-query";
import { getMyStores } from "@/lib/api/stores";

export function useMyStores() {
  return useQuery({
    queryKey: ["stores", "mine"],
    queryFn: getMyStores,
    throwOnError: false,
  });
}
