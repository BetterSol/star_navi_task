const API_ENDPOINT = 'https://60816d9073292b0017cdd833.mockapi.io/modes';

export const fetchModes = async () => {
  try {
    const response = await fetch (API_ENDPOINT);
      if (!response.ok) {
        throw new Error('Failed to fetch modes');
      }
      const data = await response.json();
      return data;
  } catch (e) {
    console.error('Error fetching modes:', e.message);
    throw e;
  }
}