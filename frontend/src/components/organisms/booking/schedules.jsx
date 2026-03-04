import { Title } from '../../atoms/titles';
import { Paragraph } from '../../atoms/paragraph';
import { RecognitionCard } from './RecognitionCard';

function Schedules() {
  const title = 'Nuestros reconocimientos';
  const description =
    'Distinciones que reflejan nuestra pasión, dedicación y amor por el chocolate.';

  const recognitions = [
    {
      image: '/RECOGNITION-1.jpg',
      title: 'Reconocimiento 1',
      description:
        'Distinción otorgada por promover la identidad y tradición chocolatera local.',
    },
    {
      image: '/RECOGNITION-1.jpg',
      title: 'Reconocimiento 2',
      description:
        'Premio a la calidad y sabor artesanal en eventos regionales.',
    },
    {
      image: '/RECOGNITION-1.jpg',
      title: 'Reconocimiento 3',
      description:
        'Reconocidos por nuestros clientes como un referente en chocolate shilico.',
    },
    {
      image: '/RECOGNITION-1.jpg',
      title: 'Reconocimiento 4',
      description:
        'Reconocidos por nuestros clientes como un referente en chocolate shilico.',
    },
    
  ];

  return (
    <section className="py-12 px-4 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        <div className="mb-10" data-aos="fade-down">
          <Title level="h2" text={title} align="center" weight="bold" />
          <Paragraph
            text={description}
            className="text-center text-gray-600 mt-4 max-w-2xl mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {recognitions.map((item, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 150}>
              <RecognitionCard
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export { Schedules };