import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/professional/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/profissional/dashboard"!</div>;
}
