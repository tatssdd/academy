export {};
declare global {
  interface Navigator {
    readonly geolocation: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
      getCurrentPosition: Function;
    };
  }
  interface Window {
    navigator: Navigator;
  }
  const navigator: Navigator;
}
