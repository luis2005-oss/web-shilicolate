import { Paragraph } from "../../atoms/paragraph"

function TendenciesDescription() {
  return (
    <div className="flex gap-6 sm:gap-8 md:gap-10 w-full justify-center px-4">
        <Paragraph 
          text={'Descubre nuestros productos que están conquistando a todos con su sabor irresistible.'}
          variant="terciary"
          size="medium"
          align="center"
          className=" w-full sm:w-[90%] md:w-[80%] lg:w-200"/>
          
    </div>
    )
}

export { TendenciesDescription }