/* eslint-disable react/prop-types */


const Modal = ({ show, handleClose, children }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${show ? '' : 'hidden'}`}>
      <div className="modal-container">
        <div className="bg-slate-100 text-center p-5 h-fit lg:w-[500px] rounded shadow-md">
          {/** Modal Content */}
          {children}
          {/** Model Close btn */}
          <button className='hover:shadow-md rounded-md bg-gray-300 hover:bg-gray-400 py-2 px-5 text-base font-semibold text-gray-800 outline-none' onClick={handleClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
