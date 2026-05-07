import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/professional/appointments/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/profissional/agendamentos/$id"!</div>;
}
