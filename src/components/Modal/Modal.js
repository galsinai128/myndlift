import './Modal.css';

function Modal({show,children,closeModal}) {
  if (show) return (
    <div className="modal-background" onClick={e=> {closeModal(e)}}>
        <div className="modal" onClick={e => e.stopPropagation()}>
            {children}
        </div>

    </div>
  );
  else return null;
}

export default Modal;
