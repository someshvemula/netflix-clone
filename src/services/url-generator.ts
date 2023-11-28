const imageURLGenerator = (poster_path: string) => {
  const base_url = "https://image.tmdb.org/t/p/original";
  return base_url + poster_path;
};

export default imageURLGenerator;
