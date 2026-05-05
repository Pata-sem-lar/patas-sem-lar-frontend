import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/professional/schedules")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/profissional/horarios"!</div>;
}
