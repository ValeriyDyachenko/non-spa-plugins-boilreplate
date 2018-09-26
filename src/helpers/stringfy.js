/**
 * Strinfy obj for attach to body in cors fetch
 * @param {object} params
 * @return {string}
 */
export default function(params) {
  return Object.keys(params).map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
}
