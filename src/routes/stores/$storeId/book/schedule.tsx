import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/stores/$storeId/book/schedule")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/lojas/$lojaId/agendar/horario"!</div>;
}
