import { request } from './apiClient';
import { portfolioProjects } from '../data/projects';
import { testimonials } from '../data/testimonials';
import { caseStudies } from '../data/caseStudies';

export function fetchPortfolioProjects() {
  if (!import.meta.env.VITE_API_BASE_URL) {
    return Promise.resolve(portfolioProjects);
  }

  return request('/projects');
}

export function fetchTestimonials() {
  if (!import.meta.env.VITE_API_BASE_URL) {
    return Promise.resolve(testimonials);
  }

  return request('/testimonials');
}

export function fetchCaseStudies() {
  if (!import.meta.env.VITE_API_BASE_URL) {
    return Promise.resolve(caseStudies);
  }

  return request('/case-studies');
}

export function submitContactForm(payload) {
  if (!import.meta.env.VITE_API_BASE_URL) {
    return Promise.resolve({ ok: true, payload });
  }

  return request('/contact', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}