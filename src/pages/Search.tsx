import React from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { Gallery } from '../components/Gallery';
import { GiphyResponse, Image } from '../types';

export const SearchPage: React.FC = () => {
  const [images, setImages] = React.useState<Image[]>();
  const [searchQuery, setSearchQuery] = React.useState('');

  const fetchData = async () => {
    const request: AxiosRequestConfig = {
      url: 'https://api.giphy.com/v1/gifs/search',
      params: {
        api_key: 'NUK3B8h1yZAUoY6B5WV2jlimmkx61Ugf',
        limit: 10,
        q: searchQuery,
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

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setSearchQuery(newValue);
  }

  return (
    <>
    <header className="App-header">
      Search
    </header>

    <input value={searchQuery} onChange={handleInputChange} />

    <button onClick={fetchData} className="App-refresh">
      Fetch
    </button>

    <Gallery images={images} />
  </>
  )
}
