import Modal from 'react-modal';
import { useState, useEffect, useCallback, useMemo } from 'react';
import * as dataPhotosService from '../services/photos-api';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Loader from '../components/Loader/Loader';
import LoadMoreBtn from '../components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../components/SearchBar/SearchBar';
import NoMoreContent from '../components/NoMoreContent/NoMoreContent';
import ImageModal from '../components/ImageModal/ImageModal';
Modal.setAppElement('#root');
import { Photo } from './App.types';
import { FetchPhotosResponse } from './App.types';

type PhotoCollection = Photo[];

function App() {
  const [photos, setPhotos] = useState<PhotoCollection>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<Photo | null>(null);

  const onImageClick = useCallback((data: Photo): void => {
    setIsOpen(true);
    setModalData(data);
  }, []);

  const closeModal = useCallback((): void => {
    setIsOpen(false);
    setModalData(null);
  }, []);

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const { results, total_pages }: FetchPhotosResponse =
          await dataPhotosService.fetchPhotos(query, page);

        setTotalPages(total_pages);
        setPhotos((prev) => [...prev, ...results]);
      } catch (error) {
        setIsError(true);
        console.error('Error fetching photos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query, page]);

  const handleSetQuery = useCallback(
    (newQuery: string): void => {
      if (newQuery === query) return;
      setQuery(newQuery);
      setPhotos([]);
      setPage(1);
    },
    [query],
  );

  const handleLoadMore = useCallback((): void => {
    setPage((prev) => prev + 1);
  }, []);

  const isMoreContent: boolean = useMemo(
    () =>
      Boolean(query) &&
      !isLoading &&
      photos.length > 0 &&
      totalPages > 0 &&
      page >= totalPages,
    [query, isLoading, page, totalPages, photos.length],
  );

  return (
    <>
      <SearchBar onSubmit={handleSetQuery} disabled={isLoading} />
      {photos.length > 0 && (
        <ImageGallery photos={photos} onClick={onImageClick} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {page < totalPages ? <LoadMoreBtn onClick={handleLoadMore} /> : null}
      {isMoreContent ? <NoMoreContent /> : null}
      <ImageModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        modalData={modalData}
      />
    </>
  );
}

export default App;

// function App() {
//   const [photos, setPhotos] = useState<PhotoCollection>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [isError, setIsError] = useState<boolean>(false);
//   const [query, setQuery] = useState<string>('');
//   const [page, setPage] = useState<number>(1);
//   const [totalPages, setTotalPages] = useState<number>(0);
//   const [modalIsOpen, setIsOpen] = useState<boolean>(false);
//   const [modalData, setModalData] = useState<Photo | null>(null);

//   // console.log('modalIsOpen', modalIsOpen);
//   // console.log('modalData', modalData);
//   // console.log('photos', photos);
//   // console.log('query', query);

//   function onImageClick(data: Photo): void {
//     setIsOpen(true);
//     setModalData(data);
//   }

//   function closeModal(): void {
//     setIsOpen(false);
//     setModalData(null);
//   }

//   useEffect(() => {
//     if (!query) return;

//     const getData = async () => {
//       try {
//         setIsLoading(true);
//         setIsError(false);

//         const { results, total_pages } = await dataPhotosService.fetchPhotos(
//           query,
//           page,
//         );

//         setTotalPages(total_pages);
//         setPhotos((prev) => [...prev, ...results]);
//       } catch {
//         setIsError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     getData();
//   }, [query, page]);

//   const handleSetQuery = (newQuery: string): void => {
//     if (newQuery === query) return;
//     setQuery(newQuery);
//     setPhotos([]);
//     setPage(1);
//   };

//   const handleLoadMore = (): void => {
//     setPage((prev: number) => prev + 1);
//   };

//   const isMoreContent: boolean =
//     Boolean(query) && !isLoading && page >= totalPages && totalPages > 0;

//   return (
//     <>
//       <SearchBar onSubmit={handleSetQuery} disabled={isLoading} />
//       {photos.length > 0 && (
//         <ImageGallery photos={photos} onClick={onImageClick} />
//       )}
//       {isLoading && <Loader />}
//       {isError && <ErrorMessage />}
//       {page < totalPages ? <LoadMoreBtn onClick={handleLoadMore} /> : null}
//       {isMoreContent ? <NoMoreContent /> : null}
//       <ImageModal
//         closeModal={closeModal}
//         modalIsOpen={modalIsOpen}
//         modalData={modalData}
//       />
//     </>
//   );
// }

// export default App;
