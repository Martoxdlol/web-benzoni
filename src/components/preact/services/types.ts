export type ServiceCategory = 'facial' | 'corporal' | 'wellness';

export interface Treatment {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ServiceArea {
  id: ServiceCategory;
  label: string;
  description: string;
  color: string;
  hoverColor: string;
  treatments: Treatment[];
}
