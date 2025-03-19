import s from './ImageGallery.module.css';
import Container from '../Container/Container.js';
import ImageCard from '../ImageCard/ImageCard.js';
import { Photo } from '../../App/App.types';
import { FC } from 'react';

type ImageGalleryProps = {
  photos: Array<Pick<Photo, 'id' | 'urls' | 'alt_description'>>;
  onClick: (photo: Pick<Photo, 'id' | 'alt_description' | 'urls'>) => void;
};

const ImageGallery: FC<ImageGalleryProps> = ({ photos, onClick }) => {
  return (
    <section className={s.imageGallery_section}>
      <Container className={s.imageGallery_container}>
        <ul className={s.imageGallery_list}>
          {photos.map((item) => (
            <li className={s.imageGallery_item} key={item.id}>
              <ImageCard onClick={onClick} item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ImageGallery;
