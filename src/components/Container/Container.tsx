import s from './Container.module.css';

type IContainer = {
  children: React.ReactNode | string | null;
  className?: string;
};

const Container: React.FC<IContainer> = ({ children, className = '' }) => {
  return <div className={`${s.container} ${className}`}>{children}</div>;
};

export default Container;
