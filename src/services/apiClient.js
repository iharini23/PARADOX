const baseUrl = import.meta.env.VITE_API_BASE_URL ?? '';

export async function request(path, options = {}) {
  if (!baseUrl) {
    return { ok: true, mock: true };
  }

  const response = await fetch(`${baseUrl}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error('Request failed');
  }

  return response.json();
}