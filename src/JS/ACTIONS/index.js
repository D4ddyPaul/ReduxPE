const DOMAIN = 'HerosVignette';

export const LOAD = `${DOMAIN}/Load`;

export function load() {
  return {
    type: LOAD
  };
}
