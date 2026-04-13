import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"
import { useAuthStore } from "@/store/authStore"
import { refresh } from "@/lib/api/auth"

export const Route = createFileRoute("/profissional")({
  beforeLoad: async () => {
    const { user, accessToken, setAccessToken, logout } =
      useAuthStore.getState()

    if (!user) throw redirect({ to: "/login" })

    if (!accessToken) {
      try {
        const data = await refresh()
        setAccessToken(data.access_token)
      } catch {
        logout()
        throw redirect({ to: "/login" })
      }
    }

    if (user.role !== "profissional") throw redirect({ to: "/" })
  },
  component: ProfissionalLayout,
})

function ProfissionalLayout() {
  return <Outlet />
}
