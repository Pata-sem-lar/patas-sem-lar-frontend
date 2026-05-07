import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/professionals/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/admin/profissionais/"!</div>;
}
