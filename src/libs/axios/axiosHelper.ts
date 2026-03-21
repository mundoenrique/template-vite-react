import { API_PATH } from '@/constants';

import apiConfig from './axiosConfig';

import type { HttpRequest } from '@/types';

export async function manageRequest<TResponse>({ pathUrl, method, params, body }: HttpRequest): Promise<TResponse> {
  const url = pathUrl ? `${API_PATH}/${pathUrl}` : API_PATH;

  const { data } = await apiConfig<TResponse>({ url, method, data: body, params });

  return data;
}
