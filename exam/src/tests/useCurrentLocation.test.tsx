import { renderHook, waitFor } from '@testing-library/react';
import { useCurrentLocation } from '../hooks/useCurrentLocation';

describe('useCurrentLocation Hook', () => {
  let mockGetCurrentPosition: jest.SpyInstance<
    void,
    [
      successCallback: PositionCallback,
      errorCallback?: PositionErrorCallback | null | undefined,
      options?: PositionOptions | undefined,
    ]
  >;

  beforeAll(() => {
    // Определяем navigator.geolocation, если его нет
    if (!navigator.geolocation) {
      Object.defineProperty(navigator, 'geolocation', {
        configurable: true,
        writable: true,
        value: {
          getCurrentPosition: jest.fn(),
        },
      });
    }
  });

  beforeEach(() => {
    // Мокаем getCurrentPosition
    mockGetCurrentPosition = jest.spyOn(
      navigator.geolocation,
      'getCurrentPosition',
    );
    mockGetCurrentPosition.mockImplementationOnce((success) => {
      return success({
        coords: {
          latitude: 40.7128,
          longitude: -74.006,
          accuracy: 0,
          altitude: null,
          altitudeAccuracy: null,
          heading: null,
          speed: null,
          toJSON: function () {
            throw new Error('Function not implemented.');
          },
        },
        timestamp: 0,
        toJSON: function () {
          throw new Error('Function not implemented.');
        },
      });
    });
  });

  afterEach(() => {
    mockGetCurrentPosition.mockRestore();
  });

  it('должен обновлять координаты после получения геолокации', async () => {
    const { result } = renderHook(() => useCurrentLocation(null));

    await waitFor(() => {
      expect(result.current).toEqual([40.7128, -74.006]);
    });

    expect(navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
  });
});
