import { useSearchParams } from 'react-router';

import type { URLSearchParamsInit } from 'react-router';

export function useQueryParams(defaultInit?: URLSearchParamsInit) {
  const [searchParams, setSearchParams] = useSearchParams(defaultInit);

  /**
   * Retrieves the specified query parameters from the URL.
   * @param {string[]} paramKeys - Array of query parameter names to retrieve from the URL. If a parameter does not exist, its value will be null.
   * @returns {Record<string, string | null>} An object containing the query parameters and their values. If a parameter does not exist, its value will be null.
   * @example
   * // If the URL is 'https://example.com/?name=John&age=30'
   * getStrParams(['name', 'age', 'city']);
   * // Returns { name: 'John', age: '30', city: null }
   */
  const getStrParams = (paramKeys: string[]): Record<string, string | null> => {
    const params: Record<string, string | null> = {};

    paramKeys.forEach((key) => {
      const value = searchParams.get(key);

      if (value === null || value.trim() === '') {
        params[key] = null;
      } else {
        params[key] = value;
      }
    });

    return params;
  };

  /**
   * Retrieves the specified query parameters from the URL, returning default values for any parameters that are not present.
   * @param {Record<string, string>} paramKeys - An object where keys are the names of the query parameters to retrieve and values are the default values to return if the parameters are not present in the URL.
   * @returns {Record<string, string>} An object containing the query parameters and their values. If a parameter does not exist in the URL, its value will be the corresponding default value from the input object.
   * @example
   * // If the URL is 'https://example.com/?name=John&age=30'
   * getStrParamsWithDefaults({ name: 'Jose', age: '25', city: 'Miami' });
   * // Returns { name: 'John', age: '30', city: 'Miami' }
   */
  const getStrParamsWithDefaults = (paramKeys: Record<string, string>): Record<string, string> => {
    const params: Record<string, string> = {};

    Object.entries(paramKeys).forEach(([key, defaultValue]) => {
      const value = searchParams.get(key);

      if (value === null || value.trim() === '') {
        params[key] = defaultValue;
      } else {
        params[key] = value;
      }
    });

    return params;
  };

  /**
   * Retrieves the specified query parameters from the URL and parses them as numbers (accepts negative and decimal values).
   * If a parameter is missing or cannot be parsed as a valid number, its value will be null.
   * @param {string[]} paramKeys - Array of query parameter names to retrieve and parse as numbers.
   * @returns {Record<string, number | null>} An object containing the query parameters and their parsed number values. If a parameter does not exist in the URL or cannot be parsed as a valid number, its value will be null.
   * @example
   * // If the URL is 'https://example.com/?page=2.5&limit=-10&offset=abc'
   * getNumParams(['page', 'limit', 'offset']);
   * // Returns { page: 2.5, limit: -10, offset: null }
   */
  const getNumParams = (paramKeys: string[]): Record<string, number | null> => {
    const params: Record<string, number | null> = {};
    paramKeys.forEach((key) => {
      const value = searchParams.get(key);
      if (value === null || value.trim() === '') {
        params[key] = null;
      } else {
        const parsed = Number(value);
        params[key] = Number.isFinite(parsed) ? parsed : null;
      }
    });
    return params;
  };

  /**
   * Retrieves the specified query parameters from the URL and parses them as numbers (accepts negative and decimal values), returning default values for any parameters that are not present or invalid.
   * @param {Record<string, number>} paramKeys - An object where keys are the parameter names and values are the default numbers to use if the parameter is missing or invalid.
   * @returns {Record<string, number>} An object containing the query parameters and their number values. If a parameter does not exist or is invalid, the default value is used.
   * @example
   * // If the URL is 'https://example.com/?page=2&limit=abc'
   * getNumParamsWithDefaults({ page: 1, limit: 10 });
   * // Returns { page: 2, limit: 10 }
   */
  const getNumParamsWithDefaults = (paramKeys: Record<string, number>): Record<string, number> => {
    const params: Record<string, number> = {};
    Object.entries(paramKeys).forEach(([key, defaultValue]) => {
      const value = searchParams.get(key);
      if (value === null || value.trim() === '') {
        params[key] = defaultValue;
      } else {
        const parsed = Number(value);
        params[key] = Number.isFinite(parsed) ? parsed : defaultValue;
      }
    });
    return params;
  };

  /**
   * Sets or updates the specified query parameters in the URL.
   * @param {Record<string, string | number>} params - An object where keys are the parameter names and values are the values to set in the URL. Values will be converted to strings.
   * @returns {void}
   * @example
   * setParamsMerge ({ page: 2, search: 'test' });
   * // Updates the URL to include ?page=2&search=test
   */
  /**
   * Actualiza parámetros manteniendo los existentes (merge).
   */
  const setParamsMerge = (params: Record<string, string | number>): void => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      Object.entries(params).forEach(([paramKey, value]) => {
        next.set(paramKey, String(value));
      });
      return next;
    });
  };

  /**
   * Sets or updates the specified query parameters in the URL, overwriting any existing values.
   * @param paramsIn - An object where keys are the parameter names and values are the values to set in the URL. Values will be converted to strings.
   * @returns {void}
   * @example
   * setParamsReplace({ page: 2, search: 'test' });
   * // Updates the URL to include ?page=2&search=test, removing any other existing query parameters
   */
  /**
   * Reemplaza todos los parámetros por los dados (replace).
   */
  const setParamsReplace = (paramsIn: Record<string, string | number>): void => {
    const params: Record<string, string> = {};
    Object.entries(paramsIn).forEach(([paramKey, value]) => {
      params[paramKey] = String(value);
    });
    setSearchParams(params);
  };

  /**
   * Removes the specified query parameters from the URL.
   * @param {string[]} paramKeys - Array of query parameter names to remove from the URL.
   * @returns {void}
   * @example
   * deleteQueryParams(['page', 'search']);
   * // Removes the 'page' and 'search' parameters from the URL
   */
  const deleteQueryParams = (paramKeys: string[]): void => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);

      paramKeys.forEach((key) => {
        next.delete(key);
      });

      return next;
    });
  };

  /**
   * Retrieves a boolean query parameter from the URL.
   * Accepts 'true', '1' as true; 'false', '0' as false; returns null if not present or invalid.
   * @param {string} key - The query parameter name.
   * @returns {boolean | null}
   * @example
   * // URL: ?active=true
   * getBoolParam('active'); // true
   * // URL: ?active=0
   * getBoolParam('active'); // false
   */
  const getBoolParam = (key: string): boolean | null => {
    const value = searchParams.get(key);
    if (value === null || value.trim() === '') return null;
    if (value === 'true' || value === '1') return true;
    if (value === 'false' || value === '0') return false;

    return null;
  };

  /**
   * Retrieves an array query parameter from the URL, splitting by comma.
   * Returns an empty array if not present or empty.
   * @param {string} key - The query parameter name.
   * @returns {string[]}
   * @example
   * // URL: ?tags=react,js,frontend
   * getArrayParam('tags'); // ['react', 'js', 'frontend']
   */
  const getArrayParam = (key: string): string[] => {
    const value = searchParams.get(key);
    return value ? value.split(',').filter(Boolean) : [];
  };

  return {
    deleteQueryParams,
    getArrayParam,
    getBoolParam,
    getNumParams,
    getNumParamsWithDefaults,
    getStrParams,
    getStrParamsWithDefaults,
    setParamsMerge,
    setParamsReplace,
  };
}
