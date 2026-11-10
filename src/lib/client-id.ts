const CLIENT_KEY = 'obiba.client';

export function clientId(): string | null {
  if (typeof localStorage === 'undefined') return null;
  try {
    let id = localStorage.getItem(CLIENT_KEY);
    if (!id) {
      id = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(16)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
      localStorage.setItem(CLIENT_KEY, id);
    }
    return id;
  } catch {
    return null;
  }
}
