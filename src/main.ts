import "./style.css";
import Keycloak from "keycloak-js";

const kc = new Keycloak({
  url: import.meta.env.VITE_KEYCLOAK_URL,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
});

kc.init({ onLoad: "check-sso", pkceMethod: "S256" }).then((authenticated) => {
  render(authenticated);
});

function render(authenticated) {
  const claims = authenticated ? kc.tokenParsed : null;
  document.getElementById("app").innerHTML = `
    <main>
      <h1>Keycloak SSO test</h1>
      <p>Authenticated: ${authenticated}</p>
      ${
        claims
          ? `
        <pre>${JSON.stringify(
          {
            preferred_username: claims.preferred_username,
            realm_access: claims.realm_access, // ← здесь роли
            groups: claims.groups, // ← здесь группы (если есть mapper)
          },
          null,
          2,
        )}</pre>
        <button id="logout">Logout</button>`
          : `
        <button id="login">Login with EPFL</button>`
      }
    </main>`;

  document.getElementById("login")?.addEventListener("click", () => kc.login());
  document
    .getElementById("logout")
    ?.addEventListener("click", () => kc.logout());
}
