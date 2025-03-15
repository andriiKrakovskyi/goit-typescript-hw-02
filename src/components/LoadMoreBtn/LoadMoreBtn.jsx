import s from './LoadMoreBtn.module.css';
import Container from '../Container/Container.jsx';

export default function LoadMoreBtn({ onClick }) {
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
}
