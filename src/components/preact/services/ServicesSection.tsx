import { useMemo, useCallback, useEffect } from 'preact/hooks';
import { useUrlState } from './hooks/useUrlState';
import { serviceAreas, servicesUiTexts } from '../../../data/content';
import type { ServiceCategory, Treatment, ServiceArea } from '../../../data/content';

function scrollToSection() {
  const section = document.getElementById('servicios');
  if (section) {
    const headerOffset = 75;
    const elementPosition = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
  }
}

function scrollToTreatmentSection() {
  const section = document.getElementById('treatment-detail');
  if (section) {
    const headerOffset = 110;
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

// Posthog tracking helper
declare global {
  interface Window {
    posthog?: {
      capture: (event: string, properties?: Record<string, unknown>) => void;
    };
  }
}

function trackEvent(event: string, properties?: Record<string, unknown>) {
  window.posthog?.capture(event, properties);
}

interface TabButtonProps {
  area: ServiceArea;
  isActive: boolean;
  onClick: () => void;
}

function TabButton({ area, isActive, onClick }: TabButtonProps) {
  const handleClick = () => {
    trackEvent('service_tab_clicked', {
      category: area.id,
      category_label: area.label,
    });
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      class={`text-xl tracking-widest uppercase pb-2 border-b-2 transition-all text-primary ${isActive ? 'border-primary font-medium' : 'border-transparent'
        } hover:border-primary`}
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
  const href = buildTreatmentUrl(category, treatment.id);

  const handleClick = (e: Event) => {
    trackEvent('treatment_selected', {
      treatment_id: treatment.id,
      treatment_title: treatment.title,
      category: category,
    });
    onNavigate(e, treatment.id);
  };

  return (
    <li class="border-b border-secondary/30 last:border-b-0">
      <a
        href={href}
        onClick={handleClick}
        class="group flex items-center gap-3 py-2 text-primary transition-colors hover:opacity-80 text-xl text-balance"
      >
        <svg
          class="w-4 h-4 shrink-0 text-primary"
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
  nextTreatment: Treatment | null;
  onNext: (e: Event) => void;
  nextHref: string | null;
}

function TreatmentDetail({ treatment, category, onBack, backHref, imageSrc, nextTreatment, onNext, nextHref }: TreatmentDetailProps) {
  const handleBack = (e: Event) => {
    trackEvent('treatment_back_clicked', {
      from_treatment_id: treatment.id,
      from_treatment_title: treatment.title,
      category: category,
    });
    onBack(e);
  };

  const handleNext = (e: Event) => {
    trackEvent('treatment_next_clicked', {
      from_treatment_id: treatment.id,
      from_treatment_title: treatment.title,
      to_treatment_id: nextTreatment?.id,
      to_treatment_title: nextTreatment?.title,
      category: category,
    });
    onNext(e);
  };

  const handleInquiry = () => {
    trackEvent('treatment_inquiry_clicked', {
      treatment_id: treatment.id,
      treatment_title: treatment.title,
      category: category,
    });
  };

  return (
    <div class="animate-fadeIn" id="treatment-detail">
      <div class="flex items-center justify-between mb-8">
        <a
          href={backHref}
          onClick={handleBack}
          class="inline-flex items-center gap-2 text-primary hover:opacity-70 transition-opacity"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span class="text-sm tracking-widest uppercase">{servicesUiTexts.backToTreatments}</span>
        </a>
        {nextTreatment && nextHref && (
          <a
            href={nextHref}
            onClick={handleNext}
            class="inline-flex items-center gap-2 text-primary hover:opacity-70 transition-opacity"
          >
            <span class="text-sm tracking-widest uppercase">{servicesUiTexts.next}</span>
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>

      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div class="relative">
          <img
            src={imageSrc}
            alt={treatment.title}
            class="w-full h-64 lg:h-96 object-cover shadow-lg"
          />
        </div>

        <div>
          <h3 class="text-2xl lg:text-3xl font-light mb-6 text-primary">{treatment.title}</h3>
          <p class="text-base lg:text-lg leading-relaxed text-navy mb-8">{treatment.description}</p>
          <a
            href="#contacto"
            onClick={handleInquiry}
            class="inline-block px-6 py-3 bg-primary text-white text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
          >
            {servicesUiTexts.inquire}
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
  return (
    <div class="animate-fadeIn">
      <div class="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-12">
        <p class="order-1 lg:hidden text-base leading-relaxed text-primary">
          {area.description}
        </p>

        <div class="order-3 lg:order-0 lg:col-span-2">
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

        <div class="order-2 lg:order-0 lg:col-span-3 space-y-4">
          <img
            src={heroImageSrc}
            alt={servicesUiTexts.servicesImageAlt}
            class="w-full aspect-5/3 object-cover shadow-lg"
          />
          <p class="hidden lg:block text-lg leading-relaxed mb-8 text-primary">
            {area.description}
          </p>
        </div>
      </div>
    </div>
  );
}

interface ServicesSectionProps {
  heroImages: Record<string, string>;
  treatmentImages: Record<string, string>;
}

export default function ServicesSection({ heroImages, treatmentImages }: ServicesSectionProps) {
  const { tab, treatment, setTab, setTreatment, clearTreatment } = useUrlState();

  const currentArea = useMemo(() => serviceAreas.find((area) => area.id === tab)!, [tab]);

  const selectedTreatment = useMemo(() => {
    if (!treatment) return null;
    for (const area of serviceAreas) {
      const index = area.treatments.findIndex((t) => t.id === treatment);
      if (index !== -1) {
        const nextTreatment = index < area.treatments.length - 1 ? area.treatments[index + 1] : null;
        return { treatment: area.treatments[index], category: area.id, nextTreatment };
      }
    }
    return null;
  }, [treatment]);

  const getTreatmentImageSrc = (treatmentId: string): string => {
    return treatmentImages[treatmentId] || heroImages[tab];
  };

  const handleSelectTreatment = useCallback((e: Event, id: string) => {
    e.preventDefault();
    setTreatment(id);
    setTimeout(() => scrollToTreatmentSection(), 0);
  }, [setTreatment]);

  const handleBack = useCallback((e: Event) => {
    e.preventDefault();
    clearTreatment();
    scrollToSection();
  }, [clearTreatment]);

  const handleNext = useCallback((e: Event) => {
    e.preventDefault();
    if (selectedTreatment?.nextTreatment) {
      setTreatment(selectedTreatment.nextTreatment.id);
      setTimeout(() => scrollToTreatmentSection(), 0);
    }
  }, [selectedTreatment, setTreatment]);

  const backHref = useMemo(() => {
    const params = new URLSearchParams();
    if (tab !== 'facial') params.set('tab', tab);
    const query = params.toString();
    return query ? `?${query}#servicios` : '#servicios';
  }, [tab]);

  const nextHref = useMemo(() => {
    if (!selectedTreatment?.nextTreatment) return null;
    return buildTreatmentUrl(selectedTreatment.category, selectedTreatment.nextTreatment.id);
  }, [selectedTreatment]);

  useEffect(() => {
    if (window.location.hash === '#servicios' && (treatment || tab !== 'facial')) {
      scrollToSection();
    }
  }, []);

  return (
    <div>
      <div class="flex flex-col items-center lg:flex-row lg:justify-around gap-4 mb-10">
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
          nextTreatment={selectedTreatment.nextTreatment}
          onNext={handleNext}
          nextHref={nextHref}
        />
      ) : (
        <TreatmentList
          area={currentArea}
          heroImageSrc={heroImages[currentArea.id]}
          onSelectTreatment={handleSelectTreatment}
        />
      )}
    </div>
  );
}
