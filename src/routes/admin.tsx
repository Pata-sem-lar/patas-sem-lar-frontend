import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { useAuthStore } from "@/store/authStore";
import { refresh } from "@/lib/api/auth";
import { AdminSidebar } from "@/components/layout/AdminSidebar";

export const Route = createFileRoute("/admin")({
  beforeLoad: async () => {
    const { user, accessToken, setAccessToken, logout } = useAuthStore.getState();

    if (!user) throw redirect({ to: "/login" });

    // Token missing = página recarregada, refresh token ainda pode estar no cookie
    if (!accessToken) {
      try {
        const data = await refresh();
        setAccessToken(data.access_token);
      } catch {
        logout();
        throw redirect({ to: "/login" });
      }
    }

    if (user.role !== "admin_loja") throw redirect({ to: "/" });
  },
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />
      <div className="flex-1 flex flex-col ml-56">
        <Outlet />
      </div>
    </div>
  );
}
