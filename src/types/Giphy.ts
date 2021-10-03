interface GiphyImage {
  bitly_gif_url: string;
  bitly_url: string;
  id: string;
  images: {
    downsized: {
      url: string;
    };
    fixed_height: {
      url: string;
    };
  };
  title: string;
  url: string;
}

export interface GiphyResponse {
  data: GiphyImage[];
  pagination: number;
  meta: string;
}