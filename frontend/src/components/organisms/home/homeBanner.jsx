import { Paragraph } from "../../atoms/paragraph"
import { Title } from "../../atoms/titles"
import { BannerBgCurve } from "../../molecules/bannerBgCurve"
import { BannerButtons } from "../../molecules/home/bannerButtons"
import { BannerCoffee } from "../../molecules/home/bannerCupCoffe"

function HomeBanner() {
  const title  = 'Shilicolate'
  const description = `"En Shilicolate te invitamos a vivir una experiencia
  llena de sabor y calidez. Disfruta de nuestros shilibonbones, chocotejas, 
  chocolate comestible, chocolate en chapa y chocolates en caja, elaborados 
  para despertar tus sentidos y regalarte un momento especial. Cada detalle 
  está pensado para que te desconectes, te relajes y te dejes envolver por 
  el inconfundible aroma del cacao. Aquí, cada visita se convierte en un dulce recuerdo."`

  return (
    <section 
      className="
        relative 
        h-[70vh]       
        md:h-[85vh]    
        lg:h-screen    
        w-full 
        overflow-hidden
      "
    >
      <div
        className="
          absolute inset-0 
          bg-cover bg-center bg-no-repeat 
          transition-all duration-300 
          sm:bg-position-[center_30%]
        "
        style={{ backgroundImage: "url('/HOME_LOGO.jpg')" }}
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
      </div>

      <article 
        className="
          absolute inset-0 
          flex flex-col 
          justify-start          
          sm:justify-center      
          items-start 
          px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 
          text-white 
          z-10 
          pt-24 md:pt-0
          overflow-hidden
        "
      >
        <div
          className="w-full max-w-full"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <Title
            text={title}
            level="h1"
            weight="bold"
            variant="primary"
            className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6"
          />
        </div>

        <div
          className="w-full max-w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <Paragraph 
            text={description}
            size="large"
            variant="primary"
            className="max-w-2xl lg:max-w-3xl mb-6 md:mb-8 lg:mb-10 leading-relaxed"
          />
        </div>
          <BannerBgCurve design={1}/>
        <div
          className="w-full max-w-full"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="800"
        >
          <BannerButtons/>
        </div>
      </article>
        <BannerCoffee/>
    </section>
  )
}

export { HomeBanner }