import './ResultItem.css';
import { useState,useRef } from 'react';
import avatar from '../../assets/avatar.png'
import Modal from '../Modal/Modal'
import MessageModal from '../MessageModal/MessageModal'

function ResultItem({item}) {

  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [toggleMoreInfo, setToggleMoreInfo] = useState(false);
  const descriptionEl = useRef(null)


  function openModal(){
    setIsModalOpen(true);
  }

  function closeModal(){
    setIsModalOpen(false);
  }


  return (
    <div className="result-item" onClick={()=>setToggleMoreInfo(!toggleMoreInfo)}>
      <div className="upper-container">
        <div className="inner-left">
          <img src={avatar} className="item-image"/>
          <div className="info-container">
            <div className="item-info-block item-name">{`${item.firstName} ${item.lastName}`}</div>
            <div className="item-info-block item-clinic-name">{`${item.clinicName}`}</div>
            <div className={toggleMoreInfo ? "box open" : "box"}><div className={"item-info-block item-description"}>{`${item.biography}`}</div></div>
          </div>
        </div>
        <div className="inner-right">
          <div className="item-info-block address-info">{`${item.address}`}</div>
          <div className="item-info-block address-info">{`${item.city}, ${item.state}`}</div>
          <div className="item-info-block address-info">{`${item.zipCode}, ${item.country}`}</div>
        </div>
      </div>
      <div className="lower-container">
        <div className="inner-left">
          <div className="total-category-container">
            <div className="category-container">
              <div className="specialties-title">Specialties:</div>
              <div className="specialties-container">
                {item.topSpecialties.map((specialtie,i) => <span key={i} className="specialtie-item">{specialtie}</span>)}
              </div>
            </div> 
            {toggleMoreInfo ? (<div className="category-container">
              <div className="specialties-title">More Specialties:</div>
              <div className="specialties-container margin-left">
                {item.otherSpecialties.map((specialtie,i) => <span key={i} className="specialtie-item">{specialtie}</span>)}
              </div>
            </div>) : null }
            {toggleMoreInfo ? (<div className="category-container">
              <div className="specialties-title">Languages:</div>
              <div className="specialties-container">
                {item.languages.map((specialtie,i) => <span key={i} className="specialtie-item">{specialtie}</span>)}
              </div>
            </div>) : null}
          </div>
        </div>

        <div className="inner-right btn-container">
          <div className="toggle-view">
            {toggleMoreInfo ? "Hide Profile" : "View Profile"}
          </div>
          <div className="message-btn" onClick={openModal}>
            Send Message
          </div>
        </div>
      </div>
      <Modal
        show={isModalOpen}
        closeModal={closeModal}
      >
          <MessageModal
            name = {`${item.firstName} ${item.lastName}`}
            email= {item.email}
            closeModal={closeModal}
          />
      </Modal>
    </div>
  );
}

export default ResultItem;