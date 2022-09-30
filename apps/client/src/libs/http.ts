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

export async function get<T>(path: string, config?: RequestInit): Promise<T> {
  const init = {method: 'GET', ...config}
  return await http<T>(path, init)
}

export async function post<T, U>(path: string, body: T, config?: RequestInit): Promise<U> {
  const init = {method: 'POST', body: JSON.stringify(body), ...config}
  return await http<U>(path, init)
}

export async function put<T, U>(path: string, body: T, config?: RequestInit): Promise<U> {
  const init = {method: 'PUT', body: JSON.stringify(body), ...config}
  return await http<U>(path, init)
}

export async function remove<T>(path: string, config?: RequestInit): Promise<T> {
  const init = {method: 'DELETE', ...config}
  return await http<T>(path, init)
}