import { useState, useEffect, useCallback } from 'preact/hooks';
import type { ServiceCategory } from '../../../../data/content';

interface UrlState {
  tab: ServiceCategory;
  treatment: string | null;
}

const DEFAULT_STATE: UrlState = {
  tab: 'facial',
  treatment: null,
};

function getStateFromUrl(): UrlState {
  if (typeof window === 'undefined') return DEFAULT_STATE;

  const params = new URLSearchParams(window.location.search);
  const tab = params.get('tab') as ServiceCategory | null;
  const treatment = params.get('treatment');

  return {
    tab: tab && ['facial', 'corporal', 'wellness'].includes(tab) ? tab : DEFAULT_STATE.tab,
    treatment: treatment || null,
  };
}

function setUrlState(state: UrlState): void {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams();

  if (state.tab !== DEFAULT_STATE.tab) {
    params.set('tab', state.tab);
  }

  if (state.treatment) {
    params.set('treatment', state.treatment);
  }

  const queryString = params.toString();
  const newUrl = queryString
    ? `${window.location.pathname}?${queryString}${window.location.hash}`
    : `${window.location.pathname}${window.location.hash}`;

  window.history.replaceState(null, '', newUrl);
}

export function useUrlState() {
  const [state, setState] = useState<UrlState>(getStateFromUrl);

  useEffect(() => {
    const handlePopState = () => {
      setState(getStateFromUrl());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const setTab = useCallback((tab: ServiceCategory) => {
    const newState = { tab, treatment: null };
    setState(newState);
    setUrlState(newState);
  }, []);

  const setTreatment = useCallback((treatment: string | null) => {
    setState((prev) => {
      const newState = { ...prev, treatment };
      setUrlState(newState);
      return newState;
    });
  }, []);

  const clearTreatment = useCallback(() => {
    setTreatment(null);
  }, [setTreatment]);

  return {
    tab: state.tab,
    treatment: state.treatment,
    setTab,
    setTreatment,
    clearTreatment,
  };
}
