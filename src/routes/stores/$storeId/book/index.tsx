import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/stores/$storeId/book/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/lojas/$lojaId/agendar/"!</div>;
}
