import { useRouteError } from "react-router"

function Error() {
  //   const error = useRouteError()
  //   console.error(error)

  return (
    <div>
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
      <button>Retourner sur la page d'accueil</button>
    </div>
  )
}

export default Error
