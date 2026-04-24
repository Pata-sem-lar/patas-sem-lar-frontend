import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { UsuarioDTO } from "@/types/api";

interface AuthState {
  accessToken: string | null;
  user: UsuarioDTO | null;
  login: (token: string, user: UsuarioDTO) => void;
  logout: () => void;
  setAccessToken: (token: string) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      user: null,
      login: (token, user) => set({ accessToken: token, user }),
      logout: () => set({ accessToken: null, user: null }),
      setAccessToken: (token) => set({ accessToken: token }),
    }),
    {
      name: "auth-storage",
      // Persiste apenas o user — accessToken fica só em memória
      partialize: (state) => ({ user: state.user }),
    },
  ),
);
