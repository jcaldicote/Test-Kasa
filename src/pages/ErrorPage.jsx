import "./ErrorPage.scss";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="message">
      <h1 className="message__h1">404</h1>
      <p className="message__error">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/Test-Kasa/" className="message__back">
        Retournez sur la page d'accueil.
      </NavLink>
    </div>
  );
}

export default ErrorPage;
