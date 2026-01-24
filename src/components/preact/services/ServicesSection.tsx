import { useMemo, useCallback, useEffect } from 'preact/hooks';
import { useUrlState } from './hooks/useUrlState';
import { serviceAreas, categoryColors } from './data';
import type { ServiceCategory, Treatment, ServiceArea } from './types';

function scrollToSection() {
  const section = document.getElementById('servicios');
  if (section) {
    const headerOffset = 80;
    const elementPosition = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
  }
}

function buildTreatmentUrl(category: ServiceCategory, treatmentId: string): string {
  const params = new URLSearchParams();
  params.set('tab', category);
  params.set('treatment', treatmentId);
  return `?${params.toString()}#servicios`;
}

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

interface TreatmentLinkProps {
  treatment: Treatment;
  category: ServiceCategory;
  onNavigate: (e: Event, id: string) => void;
}

function TreatmentLink({ treatment, category, onNavigate }: TreatmentLinkProps) {
  const colors = categoryColors[category];
  const href = buildTreatmentUrl(category, treatment.id);

  return (
    <li class="border-b border-secondary/30 last:border-b-0">
      <a
        href={href}
        onClick={(e) => onNavigate(e, treatment.id)}
        class={`group flex items-center gap-3 py-4 ${colors.text} transition-colors hover:opacity-80`}
      >
        <svg
          class={`w-4 h-4 shrink-0 ${colors.text}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
        <span class="group-hover:underline underline-offset-4">{treatment.title}</span>
      </a>
    </li>
  );
}

interface TreatmentDetailProps {
  treatment: Treatment;
  category: ServiceCategory;
  onBack: (e: Event) => void;
  backHref: string;
  imageSrc: string;
}

function TreatmentDetail({ treatment, category, onBack, backHref, imageSrc }: TreatmentDetailProps) {
  const colors = categoryColors[category];

  return (
    <div class="animate-fadeIn">
      <a
        href={backHref}
        onClick={onBack}
        class={`inline-flex items-center gap-2 mb-8 ${colors.text} hover:opacity-70 transition-opacity`}
      >
        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span class="text-sm tracking-widest uppercase">Volver a tratamientos</span>
      </a>

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
  heroImageSrc: string;
  onSelectTreatment: (e: Event, id: string) => void;
}

function TreatmentList({ area, heroImageSrc, onSelectTreatment }: TreatmentListProps) {
  const colors = categoryColors[area.id];

  return (
    <div class="animate-fadeIn">
      <div class="grid lg:grid-cols-5 gap-8 lg:gap-12">
        <div class="lg:col-span-3">
          <p class={`text-base lg:text-lg leading-relaxed mb-8 ${colors.text}`}>
            {area.description}
          </p>

          <nav>
            <ul>
              {area.treatments.map((treatment) => (
                <TreatmentLink
                  key={treatment.id}
                  treatment={treatment}
                  category={area.id}
                  onNavigate={onSelectTreatment}
                />
              ))}
            </ul>
          </nav>
        </div>

        <div class="hidden lg:block lg:col-span-2">
          <img
            src={heroImageSrc}
            alt="Nuestros Servicios - Benzoni"
            class="w-full h-auto object-cover shadow-lg sticky top-24"
          />
        </div>
      </div>
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

  const handleSelectTreatment = useCallback((e: Event, id: string) => {
    e.preventDefault();
    setTreatment(id);
    scrollToSection();
  }, [setTreatment]);

  const handleBack = useCallback((e: Event) => {
    e.preventDefault();
    clearTreatment();
    scrollToSection();
  }, [clearTreatment]);

  const backHref = useMemo(() => {
    const params = new URLSearchParams();
    if (tab !== 'facial') params.set('tab', tab);
    const query = params.toString();
    return query ? `?${query}#servicios` : '#servicios';
  }, [tab]);

  useEffect(() => {
    if (window.location.hash === '#servicios' && (treatment || tab !== 'facial')) {
      scrollToSection();
    }
  }, []);

  return (
    <div>
      <div class="flex flex-wrap justify-center gap-4 lg:gap-12 mb-10">
        {serviceAreas.map((area) => (
          <TabButton
            key={area.id}
            area={area}
            isActive={tab === area.id && !treatment}
            onClick={() => setTab(area.id)}
          />
        ))}
      </div>

      {selectedTreatment ? (
        <TreatmentDetail
          treatment={selectedTreatment.treatment}
          category={selectedTreatment.category}
          onBack={handleBack}
          backHref={backHref}
          imageSrc={getTreatmentImageSrc(selectedTreatment.treatment.id)}
        />
      ) : (
        <TreatmentList
          area={currentArea}
          heroImageSrc={heroImageSrc}
          onSelectTreatment={handleSelectTreatment}
        />
      )}
    </div>
  );
}
