export const  getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=fg0PUlAfu8273Vt3GAZ4HY4Emify6rpC`;
  const resp = await fetch(url);
  const data = await resp.json();
  const dataGif = data.data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return dataGif;
};