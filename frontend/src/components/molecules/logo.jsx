import { Link } from "../atoms/links"
import { Title } from "../atoms/titles"

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
            className="w-15 md:w-19 lg:w-31" 
          />
          <Title 
            text={'SHILICOLATE'}
            level="h3"
            variant="tertiary"
            weight="bold"
            align="center"
            />
        </Link>
    )
}

export { Logo }