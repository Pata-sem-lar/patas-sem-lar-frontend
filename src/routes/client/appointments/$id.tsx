import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/client/appointments/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/cliente/agendamentos/$id"!</div>;
}
