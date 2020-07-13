const apiKey = 'uCAwa6J1deM6ERtP5wgSR7zFP3hsbSpm';
const apiUrl = 'https://api.giphy.com/v1/gifs/search';

export const getGifs = async category => {
  const url = `${apiUrl}?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url
  }));

  return gifs;
};
