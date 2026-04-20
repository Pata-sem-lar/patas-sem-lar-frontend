import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Plus, Store, Pencil, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMinhasLojas } from "@/hooks/useLojas";
import type { LojaDTO } from "@/types/api";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/dashboard")({
  component: AdminDashboardPage,
});

function StatusBadge({ isActive }: { isActive: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold",
        isActive ? "bg-emerald-50 text-emerald-700" : "bg-muted text-muted-foreground",
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          isActive ? "bg-emerald-500" : "bg-muted-foreground/50",
        )}
      />
      {isActive ? "Ativa" : "Inativa"}
    </span>
  );
}

interface LojaCardProps {
  loja: LojaDTO;
}

function LojaCard({ loja }: LojaCardProps) {
  return (
    <div className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
      {/* Top row */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted">
          {loja.logo_url ? (
            <img src={loja.logo_url} alt={loja.nome} className="size-10 rounded-xl object-cover" />
          ) : (
            <Store className="size-5 text-muted-foreground" />
          )}
        </div>
        <StatusBadge isActive={loja.is_active} />
      </div>

      {/* Name */}
      <h2 className="font-heading text-lg font-bold leading-tight text-foreground">{loja.nome}</h2>

      {/* Description */}
      {loja.descricao ? (
        <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{loja.descricao}</p>
      ) : (
        <p className="mt-1.5 text-sm italic text-muted-foreground/60">Sem descrição</p>
      )}

      {/* Spacer */}
      <div className="mt-auto pt-5">
        <div className="flex items-center gap-2">
          <Link to="/admin/loja/$lojaId/editar" params={{ lojaId: loja.id }} className="flex-1">
            <Button
              variant="outline"
              size="sm"
              className="w-full gap-1.5 border-input text-foreground hover:border-primary/40 hover:bg-muted hover:text-primary"
            >
              <Pencil className="size-3.5" />
              Editar
            </Button>
          </Link>

          <Link to="/lojas/$lojaId" params={{ lojaId: loja.id }}>
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 text-muted-foreground hover:text-foreground"
            >
              Vitrine
              <ArrowUpRight className="size-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function AdminDashboardPage() {
  const navigate = useNavigate();
  const { data: lojas, isLoading } = useMinhasLojas();

  useEffect(() => {
    if (!isLoading && lojas?.length === 0) {
      navigate({ to: "/admin/loja/novo" });
    }
  }, [isLoading, lojas, navigate]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary" />
      </div>
    );
  }

  if (!lojas?.length) return null;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h1 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
              Minhas lojas
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {lojas.length === 1 ? "1 loja cadastrada" : `${lojas.length} lojas cadastradas`}
            </p>
          </div>

          <Link to="/admin/loja/novo">
            <Button className="btn-salmon gap-1.5 text-sm font-semibold text-white">
              <Plus className="size-4" />
              Nova loja
            </Button>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lojas.map((loja) => (
            <LojaCard key={loja.id} loja={loja} />
          ))}
        </div>
      </div>
    </div>
  );
}
