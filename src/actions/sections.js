import { CREATE_SECTION_REQUEST, FETCH_SECTIONS_REQUEST } from './types';

export const createSection = payload => ({
  type: CREATE_SECTION_REQUEST,
  payload,
});

export const fetchSections = payload => ({
  type: FETCH_SECTIONS_REQUEST,
  payload,
});
