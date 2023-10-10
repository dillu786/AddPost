import classes from './Modal.module.css'

function Modal({children,onClose,onOpen}){
    return (
     <>
      {/* <div className={classes.backdrop} onClick={onClose}>  */}
     <div className={classes.backdrop } > 
        <dialog open={true} className={classes.modal} onClick={onOpen} >
           {children}
        </dialog>
    </div>
    
    </>
    );
    
}
export default Modal;
