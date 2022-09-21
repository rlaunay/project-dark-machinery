import type { GetServerSidePropsContext } from "next";

async function http<T>(req: GetServerSidePropsContext['req'], path: string, config: RequestInit): Promise<T> {
  let finalPath = path;
  if (path.startsWith('/') && !!process.env.NEXT_PUBLIC_API_URL) {
    finalPath = `${process.env.NEXT_PUBLIC_API_URL}${path}`
  }

  const request = new Request(finalPath, { 
    ...config,
    credentials: "include",
    headers: {
      Cookie: req.headers.cookie ? req.headers.cookie : '',
      ...config.headers,
    }
  })
  const response = await fetch(request)

  const data = await response.json().catch(() => ({}))

  if(!response.ok) {
    throw new Error(data.message)
  }

  return data;
}

export async function get<T>(req: GetServerSidePropsContext['req'], path: string, config?: RequestInit): Promise<T> {
  const init = {method: 'GET', ...config}
  return await http<T>(req, path, init)
}

export async function post<T, U>(req: GetServerSidePropsContext['req'], path: string, body: T, config?: RequestInit): Promise<U> {
  const init = {method: 'POST', body: JSON.stringify(body), ...config}
  return await http<U>(req, path, init)
}

export async function put<T, U>(req: GetServerSidePropsContext['req'], path: string, body: T, config?: RequestInit): Promise<U> {
  const init = {method: 'PUT', body: JSON.stringify(body), ...config}
  return await http<U>(req, path, init)
}

export async function remove<T>(req: GetServerSidePropsContext['req'], path: string, config?: RequestInit): Promise<T> {
  const init = {method: 'DELETE', ...config}
  return await http<T>(req, path, init)
}