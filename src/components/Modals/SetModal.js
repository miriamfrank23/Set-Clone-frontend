import React from 'react';
import { connect } from "react-redux";
import { newSet } from "../../actions";
import './SetModal.css';

const SetModal = (props) => {

  const { foundASet, modalShowing } = props

  const displayModal = () => {

    if (foundASet && modalShowing) {
      return <div className="Modal"
           overlayClassName="Overlay">
          <div>
            Congratulations! You found a set
          </div>
          <button>OK</button>
     </div>
    } else if (!foundASet && modalShowing) {
      return  <div className="modal-wrapper">
           <div className="modal-header">
           </div>
           <div className="modal-body">
              Whoops! That is not a valid set. Try again!
           </div>
           <div className="modal-footer">
               <button>OK</button>
           </div>
       </div>
    }
  }

  return (
      <div>
         {displayModal()}
     </div>
  )
}

const mapStateToProps = (state) =>  ({
  modalShowing: state.modalShowing,
  foundASet: state.foundASet
})

const mapDispatchToProps = (dispatch) =>  ({
  newSet: (set) => dispatch(newSet(set)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SetModal);
