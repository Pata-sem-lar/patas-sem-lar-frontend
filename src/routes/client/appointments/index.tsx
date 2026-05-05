import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/client/appointments/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/cliente/agendamentos/"!</div>;
}
