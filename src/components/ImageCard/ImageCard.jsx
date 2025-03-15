import s from './ImageCard.module.css';

export default function ImageCard({ item, onClick }) {
  return (
    <div onClick={() => onClick(item)} className={s.imageCard_wrapper}>
      <img
        className={s.imageCard_img}
        src={item?.urls?.regular || 'default-avatar.png'}
        alt={item?.alt_description || 'Image'}
      />
    </div>
  );
}
