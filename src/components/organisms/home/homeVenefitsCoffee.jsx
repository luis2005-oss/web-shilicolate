import { GiChocolateBar  } from "react-icons/gi";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaSmileBeam, FaBolt, FaLeaf, FaStar    } from "react-icons/fa";
import { VenefitionsList } from "../../molecules/home/homeVenefyList";
import { ContTitles } from "../../molecules/home/venefitsTitles";

function VenefitsCoffee() {
  const verifyOne = [
    {
      icon: <FaHeartCirclePlus className="text-2xl sm:text-3xl lg:text-4xl hover:transform rotate-2" />,
      title: 'Más Placer',
      paragraph: 'El chocolate despierta los sentidos y convierte cualquier momento en una experiencia deliciosa.'
    },
    {
      icon: <FaSmileBeam className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: 'Mejor Estado de Ánimo',
      paragraph: 'El cacao estimula hormonas que reducen el estrés y aumentan la sensación de felicidad.'
    },
    {
      icon: <FaBolt className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: 'Energía Natural',
      paragraph: 'El chocolate aporta energía y vitalidad para disfrutar el día con mejor actitud.'
    },
  ]

  const verifyTwo = [
    {
      icon: <FaLeaf className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: 'Antioxidantes Naturales',
      paragraph: 'El cacao protege las células y contribuye al bienestar gracias a sus antioxidantes.'
    },
    {
      icon: <GiChocolateBar  className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: 'Detalles que Enamoran',
      paragraph: 'Desde shilibonbones y chocotejas hasta chocolates en caja, cada producto es un regalo perfecto.'
    },
    {
      icon: <FaStar  className="text-2xl sm:text-3xl lg:text-4xl" />,
      title: 'Momentos Únicos',
      paragraph: 'El chocolate une personas, acompaña conversaciones y crea recuerdos inolvidables.'
    },
  ]

  return (
    <section className="flex flex-col items-center justify-center gap-15 py-10 mt-10 px-3 md:px-20">
      
      {/* Título - Aparece desde arriba */}
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <ContTitles/>
      </div>

      <div className="flex flex-col min-[600px]:flex-row gap-10 p-10 items-center justify-center">
        
        {/* Lista izquierda - Aparece desde la izquierda */}
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <VenefitionsList items={verifyOne} />
        </div>

        {/* Imagen central - Aparece con zoom */}
        <div 
          className="flex items-center justify-center"
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          <img
            src="/VENEFITIONS.png"
            alt="Vaso de cafe"
            className="
              w-52 sm:w-64 md:w-80 lg:w-96 xl:w-[400px] 
              min-[700px]:mt-[-3em]
              transition-transform duration-500 
              hover:scale-110
            "
          />
        </div>

        {/* Lista derecha - Aparece desde la derecha */}
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <VenefitionsList 
            items={verifyTwo} 
            iconPosition="right"
          />
        </div>
      </div>
    </section>
  )
}

export { VenefitsCoffee }