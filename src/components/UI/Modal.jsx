import { createPortal } from "react-dom";

const Backdrop = (props) => {
  const { onClose } = props;
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black z-[9999] opacity-75"
      onClick={onClose}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[600px] bg-white p-4 md:p-8 shadow-xl rounded-md z-[10000]">
      {props.children}
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const { onClose } = props;
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
