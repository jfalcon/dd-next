/**
 * Safely determines if the current execution context is being ran on the server or client.
 * @returns {boolean} A boolean to indicate if code is being executed on the server or not.
 */
export const isServer = () => {
  // process.browser is deprecated so don't use it. also, if TypeScript says "window" is
  // undefined then ensure you have the "dom" library loaded or manually create one via
  // globals and set it to undefined since the client code will create a valid object
  return typeof window === 'undefined';
};
