/* Common Utility Functions. */

// Unesco descriptions have markup to be parsed.
// See: https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
export function createMarkup(str) {
  return { __html: str };
}
