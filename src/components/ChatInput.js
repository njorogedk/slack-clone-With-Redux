import React, { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { db } from '../firebase'
import firebase from 'firebase'

function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState("");
    // console.log(channelId);

    const sendMessage = e => {
        e.preventDefault(); // Prevents refresh

        if (!channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Dickson',
            userImage: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        });

        setInput('');
    };
    
    return (
        <ChatInputContainer>
            <form action="">
                <input value={input} 
                onChange={e => setInput(e.target.value)} 
                placeholder={`Message #${channelName}`} 
                />
                <Button hidden type="submit" onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput


const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }

    > form > input {
        position: fixed;
        bottom: 3px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`;