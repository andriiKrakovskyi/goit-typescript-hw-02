import s from './Loader.module.css';
import Container from '../Container/Container.jsx';
import { ColorRing } from 'react-loader-spinner';

export default function Loader() {
  return (
    <section className={s.loader_section}>
      <Container className={s.loader_container}>
        <div className={s.loader_wrapper}>
          <ColorRing
            visible={true}
            height="500"
            width="500"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
      </Container>
    </section>
  );
}
