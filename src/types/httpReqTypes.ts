import type { Method } from 'axios';

type HttpParamPrimitive = string | number | boolean | null;
type HttpParamValue = HttpParamPrimitive | HttpParamPrimitive[];

type HttpRequestBody = Record<string, unknown> | FormData | URLSearchParams | string | Blob | ArrayBuffer | null;

export type HttpRequest = {
  pathUrl?: string;
  method: Method;
  params?: Record<string, HttpParamValue | undefined> | URLSearchParams;
  body?: HttpRequestBody;
};
