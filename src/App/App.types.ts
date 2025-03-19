export type Photo = {
  id: string;
  description?: string;
  alt_description?: string;
  urls: {
    regular: string;
  };
  likes?: number;
  user?: {
    name?: string;
    username?: string;
    instagram_username?: string;
  };
};

export type FetchPhotosResponse = {
  results: Photo[];
  total_pages: number;
};

export type FetchPhotosData = {
  results: Photo[];
  total: number;
  total_pages: number;
};
