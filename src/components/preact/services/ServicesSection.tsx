import { useMemo } from 'preact/hooks';
import { useUrlState } from './hooks/useUrlState';
import { serviceAreas, categoryColors } from './data';
import type { ServiceCategory, Treatment, ServiceArea } from './types';

interface TabButtonProps {
  area: ServiceArea;
  isActive: boolean;
  onClick: () => void;
}

function TabButton({ area, isActive, onClick }: TabButtonProps) {
  const colorClass = categoryColors[area.id];
  return (
    <button
      onClick={onClick}
      class={`text-sm lg:text-base tracking-widest uppercase pb-2 border-b-2 transition-all ${colorClass.text} ${
        isActive ? `${colorClass.border} font-medium` : 'border-transparent'
      } hover:${colorClass.border}`}
    >
      {area.label}
    </button>
  );
}

interface TreatmentButtonProps {
  treatment: Treatment;
  category: ServiceCategory;
  onClick: () => void;
}

function TreatmentButton({ treatment, category, onClick }: TreatmentButtonProps) {
  const colors = categoryColors[category];
  return (
    <li>
      <button
        onClick={onClick}
        class={`w-full text-left p-4 bg-cream ${colors.text} transition-all duration-300 ${
          category === 'facial'
            ? 'hover:bg-primary hover:text-secondary'
            : category === 'corporal'
              ? 'hover:bg-accent-green hover:text-white'
              : 'hover:bg-accent-teal hover:text-white'
        }`}
      >
        <span class="font-medium">• {treatment.title}</span>
      </button>
    </li>
  );
}

interface TreatmentDetailProps {
  treatment: Treatment;
  category: ServiceCategory;
  onBack: () => void;
  imageSrc: string;
}

function TreatmentDetail({ treatment, category, onBack, imageSrc }: TreatmentDetailProps) {
  const colors = categoryColors[category];

  return (
    <div class="animate-fadeIn">
      <button
        onClick={onBack}
        class={`flex items-center gap-2 mb-8 ${colors.text} hover:opacity-70 transition-opacity`}
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span class="text-sm tracking-widest uppercase">Volver a tratamientos</span>
      </button>

      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div class="relative">
          <img
            src={imageSrc}
            alt={treatment.title}
            class="w-full h-64 lg:h-96 object-cover shadow-lg"
          />
        </div>

        <div>
          <h3 class={`text-2xl lg:text-3xl font-light mb-6 ${colors.text}`}>{treatment.title}</h3>
          <p class="text-base lg:text-lg leading-relaxed text-navy mb-8">{treatment.description}</p>
          <a
            href="#contacto"
            class={`inline-block px-6 py-3 ${colors.bg} text-white text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90`}
          >
            Consultar
          </a>
        </div>
      </div>
    </div>
  );
}

interface TreatmentListProps {
  area: ServiceArea;
  onSelectTreatment: (id: string) => void;
}

function TreatmentList({ area, onSelectTreatment }: TreatmentListProps) {
  const colors = categoryColors[area.id];

  return (
    <div class="animate-fadeIn">
      <div class={`mb-8 ${colors.text}`}>
        <p class="text-base lg:text-lg leading-relaxed max-w-4xl">{area.description}</p>
      </div>
      <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {area.treatments.map((treatment) => (
          <TreatmentButton
            key={treatment.id}
            treatment={treatment}
            category={area.id}
            onClick={() => onSelectTreatment(treatment.id)}
          />
        ))}
      </ul>
    </div>
  );
}

interface ServicesSectionProps {
  heroImageSrc: string;
  treatmentImages: Record<string, string>;
}

export default function ServicesSection({ heroImageSrc, treatmentImages }: ServicesSectionProps) {
  const { tab, treatment, setTab, setTreatment, clearTreatment } = useUrlState();

  const currentArea = useMemo(() => serviceAreas.find((area) => area.id === tab)!, [tab]);

  const selectedTreatment = useMemo(() => {
    if (!treatment) return null;
    for (const area of serviceAreas) {
      const found = area.treatments.find((t) => t.id === treatment);
      if (found) return { treatment: found, category: area.id };
    }
    return null;
  }, [treatment]);

  const getTreatmentImageSrc = (treatmentId: string): string => {
    return treatmentImages[treatmentId] || heroImageSrc;
  };

  return (
    <div>
      <div class="flex flex-wrap justify-center gap-4 lg:gap-12 mb-8">
        {serviceAreas.map((area) => (
          <TabButton
            key={area.id}
            area={area}
            isActive={tab === area.id && !treatment}
            onClick={() => setTab(area.id)}
          />
        ))}
      </div>

      {!selectedTreatment && (
        <div class="mb-12">
          <img
            src={heroImageSrc}
            alt="Nuestros Servicios - Benzoni"
            class="w-full h-64 lg:h-96 object-cover shadow-lg"
          />
        </div>
      )}

      {selectedTreatment ? (
        <TreatmentDetail
          treatment={selectedTreatment.treatment}
          category={selectedTreatment.category}
          onBack={clearTreatment}
          imageSrc={getTreatmentImageSrc(selectedTreatment.treatment.id)}
        />
      ) : (
        <TreatmentList area={currentArea} onSelectTreatment={setTreatment} />
      )}
    </div>
  );
}
