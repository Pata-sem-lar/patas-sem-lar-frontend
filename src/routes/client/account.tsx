import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/client/account")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/cliente/conta"!</div>;
}
