import React from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { Gallery } from '../components/Gallery';
import { GiphyResponse, Image } from '../types';

export const TrendingPage: React.FC = () => {
  const [images, setImages] = React.useState<Image[]>();

  const fetchData = async () => {
    const request: AxiosRequestConfig = {
      url: 'https://api.giphy.com/v1/gifs/trending',
      params: {
        api_key: 'NUK3B8h1yZAUoY6B5WV2jlimmkx61Ugf',
        limit: 10,
      }
    }
    const result: AxiosResponse<GiphyResponse> = await axios(request);
    const images = result.data.data.map(({ id, images, title, url }) => ({
      id,
      src: images.fixed_height.url,
      title,
      url,
    }));
    setImages(images)
  };

  React.useEffect(() => {
    void fetchData();
  }, []);

  return (
    <>
    <header className="App-header">
      Trending
    </header>

    <button onClick={fetchData} className="App-refresh">
      Refresh
    </button>

    <Gallery images={images} />
  </>
  )
}
