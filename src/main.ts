import "./style.css";

const routes: Record<string, string> = {
  "/wiki_enac_test/": "Home",
  "/wiki_enac_test/about": "About",
  "/wiki_enac_test/contacts": "Contacts",
};

function render() {
  const app = document.getElementById("app");
  if (!app) return;
  const path = window.location.pathname;
  app.innerHTML = `
    <main>
      <h1>${routes[path] ?? "404 — SPA fallback works"}</h1>
      <nav>
        <a href="/wiki_enac_test/">Home</a>
        <a href="/wiki_enac_test/about">About</a>
        <a href="/wiki_enac_test/contacts">Contacts</a>
      </nav>
      <p>Open a deep link (About) in a new tab: with 404.html it renders
         this page, without it GitHub shows its own 404.</p>
    </main>`;
}

window.addEventListener("popstate", render);
render();
