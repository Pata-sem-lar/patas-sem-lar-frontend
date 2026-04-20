import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { LojaForm } from "@/components/lojas/LojaForm";
import { useMinhasLojas, useUpdateLoja } from "@/hooks/useLojas";
import type { LojaFormData } from "@/lib/validations/loja";

export const Route = createFileRoute("/admin/loja/$lojaId/editar")({
  component: EditarLojaPage,
});

function EditarLojaPage() {
  const { lojaId } = Route.useParams();
  const navigate = useNavigate();
  const { data: lojas, isLoading } = useMinhasLojas();
  const { mutate, isPending, error } = useUpdateLoja(lojaId);

  const loja = lojas?.find((l) => l.id === lojaId);

  useEffect(() => {
    if (!isLoading && lojas && !loja) {
      navigate({ to: "/admin/dashboard" });
    }
  }, [isLoading, lojas, loja, navigate]);

  if (isLoading || !loja) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary" />
      </div>
    );
  }

  const defaultValues: Partial<LojaFormData> = {
    nome: loja.nome,
    descricao: loja.descricao ?? "",
    telefone: loja.telefone ?? "",
    email: loja.email ?? "",
    endereco: loja.endereco ?? "",
    logo_url: loja.logo_url ?? "",
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-lg">
        {/* Back nav */}
        <Link
          to="/admin/dashboard"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Minhas lojas
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-2xl font-extrabold tracking-tight text-foreground">
            Editar loja
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            As alterações aparecem imediatamente na vitrine pública.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <LojaForm
            defaultValues={defaultValues}
            onSubmit={(data) => mutate(data)}
            isPending={isPending}
            apiError={error}
            submitLabel="Salvar alterações"
          />
        </div>
      </div>
    </div>
  );
}
