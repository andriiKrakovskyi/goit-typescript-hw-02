import s from './NoMoreContent.module.css';
import Container from '../Container/Container.jsx';

export default function NoMoreContent() {
  return (
    <section className={s.noMoreContent_section}>
      <Container className={s.noMoreContent_container}>
        <div className={s.noMoreContent_wrapper}>
          <h2 className={s.noMoreContent_text}>No more content available</h2>
        </div>
      </Container>
    </section>
  );
}
