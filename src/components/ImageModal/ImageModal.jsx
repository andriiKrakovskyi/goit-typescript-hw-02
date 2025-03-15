import s from './ImageModal.module.css';

import { BsInstagram } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { BsVectorPen } from 'react-icons/bs';

import Modal from 'react-modal';
Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    borderRadius: '10px',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgb(50 50 50 / 80%)',
  },
};

export default function ImageModal({ modalIsOpen, closeModal, modalData }) {
  if (!modalData) return null;
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {modalData && (
        <div className={s.imageModal_wrapper}>
          <img
            className={s.imageModal_img}
            src={modalData?.urls?.regular || 'default-avatar.png'}
            alt={modalData?.alt_description || 'Image'}
          />

          <ul className={s.imageModal_list}>
            <li className={s.imageModal_item}>
              <div className={s.imageModal_value_wrapper}>
                <AiOutlineLike />
                <span className={s.imageModal_value}>Likes</span>
              </div>

              <span className={s.imageModal_quantity}>
                {modalData?.likes ?? 0}
              </span>
            </li>

            <li className={s.imageModal_item}>
              <div className={s.imageModal_value_wrapper}>
                <BsInstagram />
                <span className={s.imageModal_value}>Instagram</span>
              </div>

              <span className={s.imageModal_quantity}>
                {modalData?.user?.instagram_username || 'Not found'}
              </span>
            </li>

            <li className={s.imageModal_item}>
              <div className={s.imageModal_value_wrapper}>
                <BsVectorPen />
                <span className={s.imageModal_value}>Author</span>
              </div>

              <span className={s.imageModal_quantity}>
                {modalData?.user?.name || 'Unknown'}
              </span>
            </li>
          </ul>
        </div>
      )}
    </Modal>
  );
}
