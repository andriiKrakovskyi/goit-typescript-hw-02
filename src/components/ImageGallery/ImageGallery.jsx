import s from './ImageGallery.module.css';
import Container from '../Container/Container.jsx';
import ImageCard from '../ImageCard/ImageCard.jsx';

export default function ImageGallery({ photos, onClick }) {
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
}
