import './MessageModal.css';
import avatar from '../../assets/avatar.png'
import { useState } from 'react';
import { sendMessage} from '../../api'


function MessageModal({name, email, closeModal}) {

  const [yourName, setYourName] = useState("");
  const [yourEmail, setYourEmail] = useState("");
  const [yourPhone, setYourPhone] = useState("");
  const [message, setMessage] = useState("");


  function handleSubmit(e){
    e.preventDefault();
    if (!yourName || !yourEmail || !yourPhone || !message) return   
    closeModal();
    sendMessage(email,{
        yourName,
        yourEmail,
        yourPhone,
        message
    });
  }

  return (
    <div className="message-modal">
        <div className="modal-title-container">
            <img src={avatar} className="modal-image"/>
            <div className={"modal-title"}>{`Send message to ${name}`}</div>
        </div>
        <div className="modal-body">
            <form onSubmit={e=>handleSubmit(e)} className = {'modal-input-form'}>
                <input 
                    type="text" 
                    value={yourName} 
                    onChange={e=>setYourName(e.target.value)}
                    placeholder = {'Your name'}
                    className = {'modal-input-element'} />
                <input 
                    type="text" 
                    value={yourEmail} 
                    onChange={e=>setYourEmail(e.target.value)}
                    placeholder = {'Your email'}
                    className = {'modal-input-element'} />
                <input 
                    type="text" 
                    value={yourPhone} 
                    onChange={e=>setYourPhone(e.target.value)}
                    placeholder = {'Your phone'}
                    className = {'modal-input-element'} />
                <textarea 
                    type="text" 
                    value={message} 
                    onChange={e=>setMessage(e.target.value)}
                    placeholder = {'Message (up to 200 words)'}
                    className = {'modal-input-element message-input'} />
                <input 
                    type="submit" 
                    value="Send Message"
                    className = {'modal-submit-btn'}
                />
            </form>
            <div className="modal-information-container">
                <div className="modal-information-pharagraph">Dont be shy.</div>
                <div className="modal-information-pharagraph">Our Mindlift providers are here to help you and are pleased to hear from you.</div>
                <div className="modal-information-pharagraph">Feel free to ask what you want but keep it short, 200 words or less, this is just an inital contact.</div>
                <div className="modal-information-pharagraph">Remember to double check your email and phone number.</div>
            </div>
        </div>
    </div>
  );
}

export default MessageModal;