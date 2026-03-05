import { Link } from "../atoms/links"

function Logo({variant = 'secondary', className= '' }) {
  return (

    
    <Link 
          href="/" 
          variant={variant}
          className={className}
        >
          <img 
            src="/LOGO.png" 
            alt="Logo de la empresa" 
            className="w-15 md:w-24 lg:w-45 h-auto" 
          />

        </Link>
    )
}

export { Logo }