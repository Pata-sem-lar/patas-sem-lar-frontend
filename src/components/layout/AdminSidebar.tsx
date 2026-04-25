import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Store, Users, ClipboardList, Calendar, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store/authStore";
import { useMinhasLojas } from "@/hooks/useLojas";
import { useLogout } from "@/hooks/useAuth";
import { Logo } from "@/components/shared/Logo";

function getInitials(nome: string): string {
  return nome
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

interface SidebarNavItemProps {
  to?: string;
  icon: React.ReactNode;
  label: string;
  badge?: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
}

function SidebarNavItem({
  to,
  icon,
  label,
  badge,
  disabled = false,
  active = false,
}: SidebarNavItemProps) {
  const className = cn(
    "flex items-center gap-2 px-2.5 py-[0.45rem] text-[0.8125rem] rounded-lg transition-colors",
    active
      ? "bg-muted text-chart-3 font-semibold"
      : "text-slate-600 hover:bg-background hover:text-slate-800",
    disabled && "opacity-45 pointer-events-none",
  );

  const content = (
    <>
      <span className="shrink-0 [&>svg]:w-4 [&>svg]:h-4">{icon}</span>
      {label}
      {badge !== undefined && (
        <span className="ml-auto text-[0.62rem] font-semibold px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-400 leading-none">
          {badge}
        </span>
      )}
    </>
  );

  if (disabled || !to) {
    return <div className={className}>{content}</div>;
  }

  return (
    <Link to={to} className={className}>
      {content}
    </Link>
  );
}

export function AdminSidebar() {
  const user = useAuthStore((s) => s.user);
  const { mutate: logoutUser } = useLogout();
  const { data: lojas } = useMinhasLojas();
  const lojaCount = lojas?.length ?? 0;

  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isActive = (path: string) => pathname === path;

  return (
    <aside className="fixed top-0 left-0 bottom-0 w-56 flex flex-col z-30 bg-card border-r border-border">
      {/* Logo */}
      <div className="p-4 border-b border-border">
        <Logo size="sm" variant="on-white" />
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-0.5">
        <p className="text-[0.7rem] font-bold uppercase tracking-widest px-2.5 pt-2 pb-1.5 text-muted-warm">
          Geral
        </p>

        <SidebarNavItem
          to="/admin/dashboard"
          icon={<Home />}
          label="Painel"
          active={isActive("/admin/dashboard")}
        />
        <SidebarNavItem
          to="/admin/dashboard"
          icon={<Store />}
          label="Minhas Lojas"
          badge={lojaCount}
          active={false}
        />

        <p className="text-[0.7rem] font-bold uppercase tracking-widest px-2.5 pt-4 pb-1.5 text-muted-warm">
          Gestão
        </p>

        <SidebarNavItem icon={<Users />} label="Profissionais" disabled />
        <SidebarNavItem icon={<ClipboardList />} label="Serviços" disabled />
        <SidebarNavItem icon={<Calendar />} label="Agendamentos" disabled />

        <p className="text-[0.7rem] font-bold uppercase tracking-widest px-2.5 pt-4 pb-1.5 text-muted-warm">
          Conta
        </p>

        <SidebarNavItem icon={<Settings />} label="Configurações" disabled />
      </nav>

      {/* User footer */}
      <div className="p-3 border-t border-border">
        <button
          onClick={() => logoutUser()}
          className="w-full flex items-center gap-2.5 px-1.5 py-1 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors text-left"
        >
          <div className="size-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 bg-muted text-chart-4">
            {user ? getInitials(user.nome) : "—"}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-slate-900 truncate">{user?.nome ?? ""}</p>
            <p className="text-xs text-muted-foreground truncate">{user?.role ?? ""}</p>
          </div>
          <LogOut className="size-3.5 shrink-0 text-slate-400" />
        </button>
      </div>
    </aside>
  );
}
