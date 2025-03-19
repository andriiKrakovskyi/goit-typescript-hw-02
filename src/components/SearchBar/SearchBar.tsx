import s from './SearchBar.module.css';
import Container from '../Container/Container.js';
import toast from 'react-hot-toast';
import { FcSearch } from 'react-icons/fc';
import { FormEvent } from 'react';

type SearchBarProps = {
  onSubmit: (inputValue: string) => void;
  disabled: boolean;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit, disabled }) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const input = form.elements.namedItem('inputSearchBar') as HTMLInputElement;
    const inputValue = input.value.trim();

    if (!inputValue) {
      toast.error('Please enter a search term');
      return;
    }

    onSubmit(inputValue);
  };

  return (
    <section className={s.searchBar_section}>
      <Container className={s.searchBar_container}>
        <header className={s.searchBar_header}>
          <form className={s.searchBar_form} onSubmit={handleSubmit}>
            <label>
              <span className="visually_hidden">Search for images</span>
              <div className={s.inputWrapper}>
                <FcSearch className={s.searchIcon} />
                <input
                  className={s.searchBar_input}
                  name="inputSearchBar"
                  type="text"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                  maxLength={20}
                />
              </div>
            </label>
            <button
              className={s.searchBar_button}
              disabled={disabled}
              aria-label="Search button"
              type="submit"
            >
              Search
            </button>
          </form>
        </header>
      </Container>
    </section>
  );
};

export default SearchBar;
