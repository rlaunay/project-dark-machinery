import { NavLink, useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="error-page" >
      <h1>Une erreur est survenue</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <NavLink to="/">Revenir à l'accueil</NavLink>
    </div>
  )
};