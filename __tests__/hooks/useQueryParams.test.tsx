import { act, renderHook } from '@testing-library/react';
import { type ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { describe, expect, test } from 'vitest';

import { useQueryParams } from '@/hooks/useQueryParams';

function createWrapper(initialEntry: string) {
  return function Wrapper({ children }: { children: ReactNode }) {
    return <MemoryRouter initialEntries={[initialEntry]}>{children}</MemoryRouter>;
  };
}

describe('useQueryParams', () => {
  test('getStrParams: devuelve string vacio cuando el parametro existe vacio', () => {
    const { result } = renderHook(() => useQueryParams(), {
      wrapper: createWrapper('/?q='),
    });

    expect(result.current.getStrParams(['q'])).toEqual({ q: null });
  });

  test('getStrParams: devuelve null cuando el parametro no existe', () => {
    const { result } = renderHook(() => useQueryParams(), {
      wrapper: createWrapper('/?page=1'),
    });

    expect(result.current.getStrParams(['q'])).toEqual({ q: null });
  });

  test('getNumParams: parsea enteros positivos y aplica floor', () => {
    const { result } = renderHook(() => useQueryParams(), {
      wrapper: createWrapper('/?page=2.9'),
    });

    expect(result.current.getNumParams(['page'])).toEqual({ page: 2.9 });
  });

  test('getNumParams: devuelve null para 0, negativos o NaN', () => {
    const { result: zero } = renderHook(() => useQueryParams(), {
      wrapper: createWrapper('/?page=0'),
    });

    const { result: negative } = renderHook(() => useQueryParams(), {
      wrapper: createWrapper('/?page=-2'),
    });

    const { result: nan } = renderHook(() => useQueryParams(), {
      wrapper: createWrapper('/?page=abc'),
    });

    expect(zero.current.getNumParams(['page'])).toEqual({ page: 0 });
    expect(negative.current.getNumParams(['page'])).toEqual({ page: -2 });
    expect(nan.current.getNumParams(['page'])).toEqual({ page: null });
  });

  test('setParamsMerge : actualiza un parametro y conserva los demas', () => {
    const { result } = renderHook(() => useQueryParams(), {
      wrapper: createWrapper('/?q=batman&page=1'),
    });

    act(() => {
      result.current.setParamsMerge({ page: 5 });
    });

    expect(result.current.getStrParams(['q'])).toEqual({ q: 'batman' });
    expect(result.current.getNumParams(['page'])).toEqual({ page: 5 });
  });

  test('setParamsMerge : actualiza varios parametros en una sola operacion', () => {
    const { result } = renderHook(() => useQueryParams(), {
      wrapper: createWrapper('/?q=batman&page=1&category=all'),
    });

    act(() => {
      result.current.setParamsMerge({
        page: 5,
        category: 'hero',
      });
    });

    expect(result.current.getStrParams(['q'])).toEqual({ q: 'batman' });
    expect(result.current.getNumParams(['page'])).toEqual({ page: 5 });
    expect(result.current.getStrParams(['category'])).toEqual({ category: 'hero' });
  });

  test('deleteQueryParams: elimina un parametro y conserva los demas', () => {
    const { result } = renderHook(() => useQueryParams(), {
      wrapper: createWrapper('/?q=batman&page=3'),
    });

    act(() => {
      result.current.deleteQueryParams(['q']);
    });

    expect(result.current.getStrParams(['q'])).toEqual({ q: null });
    expect(result.current.getNumParams(['page'])).toEqual({ page: 3 });
  });
});
