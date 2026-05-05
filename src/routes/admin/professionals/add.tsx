import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/professionals/add")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/admin/profissionais/adicionar"!</div>;
}
