export const registerdLead = async (data, type = 'registerLead') => {
  try {
    const url = new URL(`${window.location.origin}/api/${type}`);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const req = new Request(url, {
      headers,
      method: 'POST',
      body: JSON.stringify(data),
    });

    const res = await fetch(req);

    if (res.ok) {
      return res.json();
    }

    throw error;
  } catch (error) {
    throw error;
  }
};
