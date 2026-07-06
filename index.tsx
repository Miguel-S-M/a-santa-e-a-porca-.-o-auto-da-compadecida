import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quando duas histórias conversam — Uma experiência intertextual" },
      {
        name: "description",
        content:
          "Uma experiência interativa sobre intertextualidade, inspirada na cultura nordestina brasileira.",
      },
      { property: "og:title", content: "Quando duas histórias conversam" },
      {
        property: "og:description",
        content: "Uma jornada visual e sonora pela intertextualidade nordestina.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/experiencia.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#F5E9D2", color: "#4B2E2A", fontFamily: "system-ui" }}>
      <p>Carregando a experiência…</p>
    </div>
  );
}
