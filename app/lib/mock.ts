export function delayResponse<T>(response: T, duration = 1000): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, duration);
  });
}
