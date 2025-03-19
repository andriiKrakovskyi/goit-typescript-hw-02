import s from './ImageCard.module.css';
import { Photo } from '../../App/App.types';

type ImageCardProps = {
  item: Pick<Photo, 'id' | 'urls' | 'alt_description'>;
  onClick: (item: Pick<Photo, 'id' | 'alt_description' | 'urls'>) => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ item, onClick }) => {
  return (
    <div onClick={() => onClick(item)} className={s.imageCard_wrapper}>
      <img
        className={s.imageCard_img}
        src={item?.urls?.regular || 'default-avatar.png'}
        alt={item?.alt_description || 'Image'}
      />
    </div>
  );
};

export default ImageCard;
