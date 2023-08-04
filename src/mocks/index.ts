
const initMockAPI = async (): Promise<void> => {
  if (typeof window === 'undefined') {
    const { server } = await import('@/mocks/server');
    server.listen();
  } else {
    const { worker } = await import('@/mocks/browsers');
    worker.start();
  }
};

export default initMockAPI;