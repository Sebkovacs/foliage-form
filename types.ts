import React from 'react';

export type PageView = 'home' | 'privacy' | 'terms';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  deskCount: string;
  hasNaturalLight: boolean;
  message: string;
}