import axios, { type AxiosError } from 'axios';

import { API_URL } from '@/constants/AppConstants';

function extractAxiosErrorMessage(error: AxiosError): string {
  const responseData = error.response?.data;

  if (typeof responseData === 'string' && responseData.trim().length > 0) {
    return responseData;
  }

  if (responseData && typeof responseData === 'object' && 'message' in responseData) {
    const message = (responseData as { message?: unknown }).message;

    if (typeof message === 'string' && message.trim().length > 0) {
      return message;
    }
  }

  if (error.code === 'ECONNABORTED') {
    return 'La solicitud excedio el tiempo de espera configurado.';
  }

  if (error.message) {
    return error.message;
  }

  return 'Ocurrio un error de red inesperado.';
}

const apiConfig = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: false,
  // Accept 304 for conditional requests when the browser serves cached data.
  validateStatus: (status) => (status >= 200 && status < 300) || status === 304,
});

apiConfig.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    if (axios.isAxiosError(error)) {
      throw error;
    }

    throw new Error((error as Error).message || String(error));
  }
);

apiConfig.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const detail = extractAxiosErrorMessage(error);
      const finalMessage = status ? `HTTP ${String(status)}: ${detail}` : detail;

      // Keep Axios metadata (status, config, request) and enrich only the message.
      error.message = finalMessage;

      if (import.meta.env.DEV) {
        console.error(error);
      }

      throw error;
    }

    throw new Error((error as Error).message || String(error));
  }
);

export default apiConfig;
