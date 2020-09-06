import React, { useState } from 'react';
import '../styles/ChatInput.css';
import db from '../firebase/firebase';
import { useStateValue } from '../context/StateProvider';
import firebase from 'firebase';

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState('');
  const [{ user }] = useStateValue();
  const sendMessage = (e) => {
    e.preventDefault();
    console.log('dfghj');
    console.log(user.photoURL);
    if (channelId) {
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userimage: user.photoURL,
      });
    }
    setInput('');
  };
  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
