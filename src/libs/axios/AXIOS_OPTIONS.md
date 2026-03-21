# Axios en este proyecto

Este proyecto usa una instancia de Axios en `src/api/axiosConfig.ts` y un helper en `src/api/axiosHelper.ts`.

- `axiosConfig.ts` define la configuracion global (baseURL, timeout, headers, etc.).
- `axiosHelper.ts` arma cada request (`url`, `method`, `data`, `params`).

## Configuracion base aplicada

La base actual en `axiosConfig.ts` es:

- `baseURL`: toma `API_URL` desde variables de entorno.
- `timeout: 10000`: corta requests que tarden mas de 10 segundos.
- `headers`: `Accept` y `Content-Type` en JSON.
- `withCredentials: false`: no envia cookies cross-origin por defecto.
- `validateStatus`: acepta como exito solo codigos HTTP 2xx.
- Interceptor de respuesta con error normalizado: devuelve mensajes claros como `HTTP 404: ...`.

## Opciones mas usadas (Navegador y Node)

Estas opciones funcionan en ambos entornos y son las mas importantes:

- `url`: ruta del endpoint.
- `method`: verbo HTTP (`get`, `post`, `put`, `patch`, `delete`).
- `baseURL`: prefijo comun de endpoints.
- `headers`: cabeceras HTTP.
- `params`: query string (`?page=1&name=batman`).
- `data`: body del request.
- `timeout`: tiempo maximo antes de abortar.
- `validateStatus(status)`: decide cuando resolver o rechazar.
- `transformRequest`: transforma datos antes de enviar.
- `transformResponse`: transforma respuesta antes de entregar.
- `responseType`: tipo esperado (`json`, `text`, `blob`, etc.).

Ejemplo:

```ts
await apiConfig({
  url: '/api/heroes',
  method: 'get',
  params: { page: 1, search: 'bat' },
});
```

## Opciones de navegador

Estas son especialmente utiles en frontend:

- `withCredentials`: envia cookies en CORS cuando el backend lo permite.
- `signal`: cancelacion con `AbortController`.
- `onUploadProgress`: progreso de subida de archivos.
- `onDownloadProgress`: progreso de descarga.
- `xsrfCookieName` y `xsrfHeaderName`: soporte CSRF/XSRF.
- `responseType: 'blob'`: para descargar archivos.

Ejemplo de cancelacion:

```ts
const controller = new AbortController();

apiConfig({
  url: '/api/heroes',
  method: 'get',
  signal: controller.signal,
});

controller.abort();
```

## Opciones de Node

Estas opciones son principalmente para backend Node.js (en React normalmente no se usan):

- `responseEncoding`
- `maxRedirects`
- `beforeRedirect`
- `httpAgent`
- `httpsAgent`
- `socketPath`
- `proxy`
- `transport`
- `decompress`
- `insecureHTTPParser`
- `maxBodyLength`
- `maxRate`

Nota: algunas aparecen en ejemplos oficiales de Axios, pero no aplican al runtime del navegador.

## Sobre `validateStatus`

`validateStatus` define que estados HTTP se tratan como exito.

Valor por defecto recomendado:

```ts
validateStatus: (status) => status >= 200 && status < 300;
```

Esto significa:

- `2xx` -> `then` (exito)
- `4xx` y `5xx` -> `catch` (error)

Si necesitas tratar `404` como caso de negocio valido, puedes personalizarlo:

```ts
validateStatus: (status) => status === 200 || status === 404;
```

## Recomendacion practica para este frontend

Usar por defecto:

- `baseURL`
- `headers` JSON
- `timeout`
- `validateStatus` 2xx
- `signal` para cancelacion
- interceptores para normalizar errores

Y agregar opciones avanzadas solo cuando haya un caso real.
