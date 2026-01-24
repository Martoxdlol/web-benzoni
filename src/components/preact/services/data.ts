import type { ServiceArea } from './types';

export const serviceAreas: ServiceArea[] = [
  {
    id: 'facial',
    label: 'Área Médica Facial',
    description: 'Abordamos la salud y belleza de la piel con procedimientos médicos seguros, mínimamente invasivos y de alta eficacia. Cada tratamiento se adapta a las necesidades de tu piel, combinando activos dermocosméticos, tecnología y técnica médica. Buscamos resultados naturales: una piel más firme, luminosa y equilibrada.',
    color: 'text-primary border-primary',
    hoverColor: 'hover:bg-primary hover:text-secondary',
    treatments: [
      { id: 'limpieza-facial', title: 'Limpieza facial profunda', description: 'Renueva la piel en profundidad, eliminando impurezas y células muertas. Mejora la textura, la oxigenación y la luminosidad, preparando el rostro para absorber mejor los activos y tratamientos posteriores.', image: '/src/assets/images/services/facial/limpieza-facial.jpg' },
      { id: 'cicatrices', title: 'Tratamiento cicatrices', description: 'Protocolos personalizados para atenuar cicatrices de acné, quirúrgicas o traumáticas. Combinamos tecnología fraccionada, bioestimulación y cuidado médico para mejorar textura, color y uniformidad de la piel.', image: '/src/assets/images/services/facial/tratamiento-cicatrices.jpg' },
      { id: 'toxina', title: 'Toxina botulínica', description: 'Relaja las líneas de expresión y suaviza arrugas dinámicas con resultados naturales y equilibrados. Permite armonizar el rostro, aplicando en áreas no convencionales, manteniendo frescura y expresividad.', image: '/src/assets/images/services/facial/toxina-botulinica.jpg' },
      { id: 'fillers', title: 'Fillers con ácido Hialurónico', description: 'Labios, mentón, efecto Contouring: Reponen volumen y definen contornos en labios, mentón o pómulos. Permiten realzar facciones y devolver firmeza, con resultados inmediatos y naturales, respetando la armonía facial.', image: '/src/assets/images/services/facial/fillers.jpg' },
      { id: 'bioestimulacion', title: 'Bioestimulación inyectable', description: 'Profhilo, Sculptra, HarmonicA, Radiesse. Estos activos llegaron para quedarse. Activan los procesos naturales de regeneración del colágeno y la elastina. Mejoran firmeza, densidad y calidad de la piel desde el interior, logrando un rejuvenecimiento progresivo y duradero.', image: '/src/assets/images/services/facial/bioestimulacion.jpg' },
      { id: 'hifu', title: 'HIFU (Ultrasonido Focalizado de Alta Intensidad)', description: 'Esta tecnología estimula la producción de colágeno a nivel profundo, logrando un efecto lifting sin cirugía. Mejora la firmeza y redefine el óvalo facial con resultados graduales y naturales.', image: '/src/assets/images/services/facial/hifu.jpg' },
      { id: 'fraxel', title: 'Fraxel', description: 'Radiofrecuencia Fraccionada. Favorece la regeneración de la piel mediante energía térmica controlada. Reduce poros, mejora textura, luminosidad y firmeza, promoviendo una renovación profunda y uniforme.', image: '/src/assets/images/services/facial/fraxel.jpg' },
      { id: 'luz-pulsada', title: 'Luz Pulsada Intensa', description: 'Una tecnología versátil que trata múltiples alteraciones de la piel: manchas, rosácea, acné y signos del fotoenvejecimiento. Mejora la calidad cutánea al afinar poros, aportar luminosidad y unificar el tono, dejando la piel más clara, pareja y saludable.', image: '/src/assets/images/services/facial/luz-pulsada.jpg' },
      { id: 'spider', title: 'Spider, Radiofrecuencia coagulativa', description: 'Tecnología médica precisa y segura para tratar telangiectasias, pequeñas arañitas vasculares y capilares visibles en rostro y piernas. Su acción coagulativa actúa directamente sobre el vaso sin dañar la piel circundante, logrando resultados inmediatos. Es ideal para personas con rosácea o enrojecimientos persistentes.', image: '/src/assets/images/services/facial/spider.jpg' },
    ],
  },
  {
    id: 'corporal',
    label: 'Área Corporal',
    description: 'Cada tratamiento comienza con un diagnóstico personalizado y seguimiento médico realizado por mí, para garantizar resultados seguros y adaptados a tus objetivos. Las sesiones integran masajes manuales específicos con tecnologías de última generación, orientadas a modelar, tonificar y mejorar la textura de la piel. Un abordaje integral que promueve armonía, bienestar y confianza en tu cuerpo.',
    color: 'text-accent-green border-accent-green',
    hoverColor: 'hover:bg-accent-green hover:text-white',
    treatments: [
      { id: 'masajes-modeladores', title: 'Masajes modeladores', description: 'Circulatorios y reductores. Técnicas manuales específicas que estimulan la circulación, mejoran el drenaje linfático y ayudan a remodelar contornos. Favorecen la oxigenación de los tejidos y potencian los resultados de los tratamientos tecnológicos.', image: '/src/assets/images/services/corporal/masajes-modeladores.jpg' },
      { id: 'lipolaser', title: 'Lipolaser', description: 'Tecnología que utiliza luz láser de baja intensidad para favorecer la liberación de grasa localizada. Mejora el aspecto de la piel y redefine zonas del cuerpo sin procedimientos invasivos.', image: '/src/assets/images/services/corporal/lipolaser.jpg' },
      { id: 'body-up', title: 'Body Up (ondas electromagnéticas)', description: 'Estimula la contracción muscular profunda mediante impulsos electromagnéticos de alta intensidad. Ayuda a tonificar, elevar y fortalecer la musculatura, mejorando la firmeza corporal.', image: '/src/assets/images/services/corporal/body-up.jpg' },
      { id: 'termo-slim', title: 'Termo Slim (termoterapia)', description: 'Emplea calor controlado para activar la circulación y estimular el metabolismo local. Favorece la reducción de adiposidad y la eliminación de toxinas, dejando una piel más suave y uniforme. Posee, además, programas de contracción muscular que la hace una opción imprescindible en el consultorio de modelación corporal.', image: '/src/assets/images/services/corporal/termo-slim.jpg' },
      { id: 'electroterapia', title: 'Electroterapia', description: 'Ondas rusas, interferenciales, cuadradas. Utiliza corrientes eléctricas moduladas para mejorar tono muscular, circulación y drenaje. Ideal para tratar flaccidez, retención de líquidos y modelar el contorno corporal.', image: '/src/assets/images/services/corporal/electroterapia.jpg' },
      { id: 'presoterapia', title: 'Presoterapia secuencial', description: 'Mediante presión de aire controlada, estimula el drenaje linfático y el retorno venoso. Alivia la sensación de piernas cansadas, reduce edemas y favorece la eliminación de toxinas.', image: '/src/assets/images/services/corporal/presoterapia.jpg' },
      { id: 'radiofrecuencia', title: 'Radiofrecuencia monopolar y tripolar', description: 'Activa la producción de colágeno y elastina mediante energía térmica profunda. Reafirma la piel, mejora su textura y atenúa la flaccidez, brindando un efecto tensor progresivo y natural.', image: '/src/assets/images/services/corporal/radiofrecuencia.jpg' },
      { id: 'rf-fraccionada', title: 'Radiofrecuencia Fraccionada', description: 'Combina calor y microestimulación en profundidad para mejorar la firmeza y la calidad de la piel corporal. Ideal para tratar flaccidez localizada, estrías y textura irregular.', image: '/src/assets/images/services/corporal/radiofrecuencia-fraccionada.jpg' },
      { id: 'ultra-cavitacion', title: 'Ultra cavitación', description: 'Tecnología que actúa sobre los cúmulos de grasa localizada mediante ondas ultrasónicas de baja frecuencia, favoreciendo su eliminación natural.', image: '/src/assets/images/services/corporal/ultra-cavitacion.jpg' },
      { id: 'depilacion', title: 'Depilación Definitiva', description: 'La tecnología más avanzada en depilación definitiva. Soprano Titanium combina tres longitudes de onda para eliminar el vello de forma segura, eficaz y duradera, cuidando al mismo tiempo la piel. Apta para todo tipo de piel, incluso las bronceadas, y en cualquier época del año. Su sistema de enfriamiento permite sesiones cómodas y prácticamente indoloras, dejando una piel más suave, uniforme y saludable.', image: '/src/assets/images/services/corporal/depilacion-definitiva.jpg' },
    ],
  },
  {
    id: 'wellness',
    label: 'Área Wellness',
    description: 'Un espacio pensado para detener el ritmo y reconectarte con tu bienestar. Las experiencias combinan técnicas manuales, aromaterapia y rituales sensoriales que alivian tensiones, mejoran la circulación y renuevan la energía. Una invitación a cuidar el cuerpo y la mente con serenidad.',
    color: 'text-accent-teal border-accent-teal',
    hoverColor: 'hover:bg-accent-teal hover:text-white',
    treatments: [
      { id: 'descontracturante', title: 'Masaje Descontracturante', description: 'Alivia tensiones musculares profundas y zonas de dolor acumulado. Favorece la relajación del cuerpo, mejora la postura y recupera la movilidad, brindando sensación de bienestar inmediato.', image: '/src/assets/images/services/wellness/masaje-descontracturante.jpg' },
      { id: 'californiano', title: 'Masaje Californiano', description: 'Movimientos largos, suaves y fluidos que generan un profundo efecto relajante. Estimula la circulación, disminuye el estrés y promueve armonía entre cuerpo y mente.', image: '/src/assets/images/services/wellness/masaje-californiano.jpg' },
      { id: 'ayurvedico', title: 'Masaje Ayurvédico', description: 'Inspirado en la medicina tradicional india, combina técnicas de presión y estiramiento con aceites específicos. Equilibra energía, mejora la circulación y revitaliza cuerpo y mente.', image: '/src/assets/images/services/wellness/masaje-ayurvedico.jpg' },
      { id: 'reflexologia', title: 'Reflexología', description: 'Tratamiento de los pies que activa puntos reflejos relacionados con distintos órganos y sistemas. Ayuda a equilibrar funciones corporales, liberar tensiones y promover bienestar integral.', image: '/src/assets/images/services/wellness/reflexologia.jpg' },
      { id: 'silla', title: 'Masaje de cabeza, cuello y espalda alta en silla ergonómica', description: 'Sesión rápida y efectiva para aliviar tensiones acumuladas en zonas clave. Ideal para desconectarse, reducir estrés y mejorar la movilidad postural, incluso en la rutina diaria.', image: '/src/assets/images/services/wellness/masaje-silla.jpg' },
      { id: 'piedras', title: 'Masaje con piedras calientes y armonización sonora con cuencos', description: 'Experiencia que combina el calor terapéutico de las piedras con las vibraciones sonoras de los cuencos tibetanos. Relaja profundamente músculos y mente, equilibrando la energía del cuerpo.', image: '/src/assets/images/services/wellness/masaje-piedras-calientes.jpg' },
    ],
  },
];

export const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  facial: { bg: 'bg-primary', text: 'text-primary', border: 'border-primary' },
  corporal: { bg: 'bg-accent-green', text: 'text-accent-green', border: 'border-accent-green' },
  wellness: { bg: 'bg-accent-teal', text: 'text-accent-teal', border: 'border-accent-teal' },
};
