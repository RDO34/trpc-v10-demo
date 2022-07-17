export const sleep = (timeMs: number): Promise<void> =>
  new Promise<void>((res) => setTimeout(res, timeMs));
