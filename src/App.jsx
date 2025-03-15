import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import * as dataPhotosService from './services/photos-api';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import NoMoreContent from './components/NoMoreContent/NoMoreContent';
import ImageModal from './components/ImageModal/ImageModal';
Modal.setAppElement('#root');

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  function onImageClick(data) {
    setIsOpen(true);
    setModalData(data);
  }
  function closeModal() {
    setIsOpen(false);
    setModalData(null);
  }

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const { results, total_pages } = await dataPhotosService.fetchPhotos(
          query,
          page,
        );

        setTotalPages(total_pages);
        setPhotos((prev) => [...prev, ...results]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSetQuery = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setPhotos([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };
  const isMoreContent =
    Boolean(query) && !isLoading && page >= totalPages && totalPages > 0;

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
