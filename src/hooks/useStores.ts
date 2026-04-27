import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createStore, getMyStores } from "@/lib/api/stores";
import { useNavigate } from "@tanstack/react-router";

export function useMyStores() {
  return useQuery({
    queryKey: ["stores", "mine"],
    queryFn: getMyStores,
    throwOnError: false,
  });
}

export function useCreateLoja() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: createStore,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stores"] });
      navigate({ to: "/admin/dashboard" });
    },
  });
}
