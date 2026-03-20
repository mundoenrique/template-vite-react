import { useSearchParams } from 'react-router';

import type { URLSearchParamsInit } from 'react-router';

export function useQueryParams(defaultInit?: URLSearchParamsInit) {
  const [searchParams, setSearchParams] = useSearchParams(defaultInit);

  const getQueryParam = (paramKey: string, defaultValue: string) => {
    const paramValue = searchParams.get(paramKey);

    return paramValue ?? defaultValue;
  };

  const getNumberQueryParam = (paramKey: string, defaultValue: number) => {
    const paramValue = getQueryParam(paramKey, String(defaultValue));
    const parsed = Number(paramValue);

    if (!Number.isFinite(parsed) || parsed <= 0) {
      return defaultValue;
    }

    return Math.floor(parsed);
  };

  const setQueryParam = (params: Record<string, string | number>) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);

      Object.entries(params).forEach(([paramKey, value]) => {
        next.set(paramKey, String(value));
      });

      return next;
    });
  };

  const deleteQueryParam = (paramKey: string) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);

      next.delete(paramKey);

      return next;
    });
  };

  return {
    setSearchParams,
    getQueryParam,
    getNumberQueryParam,
    setQueryParam,
    deleteQueryParam,
  };
}
