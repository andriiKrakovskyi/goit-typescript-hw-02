import s from './LoadMoreBtn.module.css';
import Container from '../Container/Container.js';

type LoadMoreBtnProps = {
  onClick: () => void;
};

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <section className={s.loadMoreBtn_section}>
      <Container className={s.loadMoreBtn_container}>
        <div className={s.loadMoreBtn_wrapper}>
          <button className={s.loadMoreBtn_button} onClick={onClick}>
            Load more
          </button>
        </div>
      </Container>
    </section>
  );
};

export default LoadMoreBtn;

// export default function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
//   return (
//     <section className={s.loadMoreBtn_section}>
//       <Container className={s.loadMoreBtn_container}>
//         <div className={s.loadMoreBtn_wrapper}>
//           <button className={s.loadMoreBtn_button} onClick={onClick}>
//             Load more
//           </button>
//         </div>
//       </Container>
//     </section>
//   );
// }

// В React.FC нельзя использовать function, нужно объявлять через const + =.
