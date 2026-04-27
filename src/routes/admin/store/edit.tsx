import { createFileRoute, Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Store, Phone, Mail, MapPin, Image, Loader2 } from "lucide-react";
import { useMyStores } from "@/hooks/useStores";
import { getApiErrorMessage } from "@/lib/api/errorUtils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SidebarTrigger } from "@/components/ui/sidebar";

export const Route = createFileRoute("/admin/store/edit")({
  component: CriarLoja,
});

function CriarLoja() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StoreFormData>({
    resolver: zodResolver(lojaSchema),
  });

  const { mutate: createLoja, isPending, error } = useMyStores();

  return (
    <div className="flex flex-col flex-1">
      {/* ── Header ── */}
      <header className="sticky top-0 z-20 px-4 md:px-8 py-3.5 flex items-center gap-3 bg-background/93 backdrop-blur-sm border-b border-border">
        <SidebarTrigger className="md:hidden text-slate-500" />
        <Link
          to="/admin/dashboard"
          className="p-1.5 rounded-lg text-slate-500 hover:bg-muted hover:text-slate-800 transition-colors"
        >
          <ArrowLeft className="size-4.5" />
        </Link>
        <div>
          <h1 className="font-heading font-bold text-slate-900 text-lg tracking-[-0.02em]">
            Nova loja
          </h1>
          <p className="text-xs text-muted-foreground">Preencha os dados do seu estabelecimento</p>
        </div>
      </header>

      {/* ── Content ── */}
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <form className="space-y-5" onSubmit={handleSubmit((data) => createLoja(data))}>
              {/* Nome */}
              <div className="flex flex-col gap-1.5">
                <Label className="font-semibold text-slate-700" htmlFor="nome">
                  Nome da loja <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <Store className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input
                    id="nome"
                    className="pl-10"
                    placeholder="Ex: Salão da Ana"
                    aria-invalid={!!errors.nome}
                    {...register("nome")}
                  />
                </div>
                {errors.nome && <p className="text-destructive text-xs">{errors.nome.message}</p>}
              </div>

              {/* Descrição */}
              <div className="flex flex-col gap-1.5">
                <Label className="font-semibold text-slate-700" htmlFor="descricao">
                  Descrição <span className="text-muted-foreground font-normal">(opcional)</span>
                </Label>
                <Textarea
                  id="descricao"
                  rows={3}
                  placeholder="Apresente seu espaço, especialidades, diferenciais..."
                  aria-invalid={!!errors.descricao}
                  {...register("descricao")}
                />
                {errors.descricao && (
                  <p className="text-destructive text-xs">{errors.descricao.message}</p>
                )}
              </div>

              {/* Telefone + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label className="font-semibold text-slate-700" htmlFor="telefone">
                    Telefone <span className="text-muted-foreground font-normal">(opcional)</span>
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                    <Input
                      id="telefone"
                      className="pl-10"
                      placeholder="(+351) 999 999 999"
                      {...register("telefone")}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="font-semibold text-slate-700" htmlFor="email">
                    Email <span className="text-muted-foreground font-normal">(opcional)</span>
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      className="pl-10"
                      placeholder="contato@minhaloja.com"
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-destructive text-xs">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Endereço */}
              <div className="flex flex-col gap-1.5">
                <Label className="font-semibold text-slate-700" htmlFor="endereco">
                  Endereço <span className="text-muted-foreground font-normal">(opcional)</span>
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input
                    id="endereco"
                    className="pl-10"
                    placeholder="Rua das Flores, 123 — São Paulo, SP"
                    {...register("endereco")}
                  />
                </div>
              </div>

              {/* Logo URL */}
              <div className="flex flex-col gap-1.5">
                <Label className="font-semibold text-slate-700" htmlFor="logo_url">
                  Logo <span className="text-muted-foreground font-normal">(opcional)</span>
                </Label>
                <div className="relative">
                  <Image className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
                  <Input
                    id="logo_url"
                    className="pl-10"
                    placeholder="https://exemplo.com/logo.png"
                    aria-invalid={!!errors.logo_url}
                    {...register("logo_url")}
                  />
                </div>
                {errors.logo_url ? (
                  <p className="text-destructive text-xs">{errors.logo_url.message}</p>
                ) : (
                  <p className="text-xs text-muted-foreground">
                    Apenas URL por agora. Upload de arquivo em breve.
                  </p>
                )}
              </div>

              {/* Submit */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full h-auto py-2.5 font-bold text-white btn-salmon gap-2"
                >
                  {isPending && <Loader2 className="size-4 animate-spin" />}
                  {isPending ? "Criando loja..." : "Criar loja"}
                </Button>

                {error && (
                  <div className="mt-3 rounded-lg border border-destructive/20 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                    {getApiErrorMessage(error)}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
