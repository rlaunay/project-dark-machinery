async function http<T>(path: string, config: RequestInit): Promise<T> {
  let finalPath = path;
  if (path.startsWith('/') && 'oui') {
    finalPath = `${'oui'}${path}`
  }

  const request = new Request(finalPath, { 
    ...config,
    credentials: "include",
    headers: {
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

export async function get<R>(path: string, config?: RequestInit): Promise<R> {
  const init = {method: 'GET', ...config}
  return await http<R>(path, init)
}

export async function post<B, R>(path: string, body: B, config?: RequestInit): Promise<R> {
  const init = {method: 'POST', body: JSON.stringify(body), ...config}
  return await http<R>(path, init)
}

export async function put<B, R>(path: string, body: B, config?: RequestInit): Promise<R> {
  const init = {method: 'PUT', body: JSON.stringify(body), ...config}
  return await http<R>(path, init)
}

export async function remove<R>(path: string, config?: RequestInit): Promise<R> {
  const init = {method: 'DELETE', ...config}
  return await http<R>(path, init)
}