import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/store/edit")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/admin/loja/editar"!</div>;
}
