import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/professional/services/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/profissional/servicos/"!</div>;
}
