import { Link } from "react-router-dom"

function Error() {
  //   const error = useRouteError()
  //   console.error(error)

  return (
    <div className='error'>
      <h2 className='error__404'>404</h2>
      <p className='error__oups'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to={"/"} className='error__home'>
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
