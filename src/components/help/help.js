import React from "react"
import {AiFillMessage} from 'react-icons/ai'
import {MdOutlineClose} from 'react-icons/md'
import {RiRadioButtonLine} from "react-icons/ri"
import {MdSend} from "react-icons/md"
import './help.css'

const Help = ()=>{
    const [showHelp,setshowHelp]= React.useState(false)
    const [sendMessage,setsendMessage]= React.useState('');
    const [AddsendMessage,setAddsendMessage]= React.useState([]);
    const [showAnswer,seshowAnswer]= React.useState(false)
        const typesendMessageFun = (e)=>{
            setsendMessage(e.target.value)
        }

        const sendMessageFun = ()=>{
            setAddsendMessage((prevmessage)=>{
                return[
                    ...prevmessage,
                    sendMessage
                ]
                
            });
            seshowAnswer(true)
        }


    return(
        <div>
        <div className="Help" onClick={()=>setshowHelp(true)}>
            <AiFillMessage className="help-icon"></AiFillMessage>
        </div>
        <div className="Help-chate" style={showHelp ? {right:'2rem'}:{right:'-100%'} }>

                    <div className="header-message">
                        <div className="header-message-text">
                            <h3>frais</h3>
                            <p> <RiRadioButtonLine 
                            className="online">
                            </RiRadioButtonLine> We’ll reply as soon as we can</p>
                        </div>
                        <MdOutlineClose 
                        className="close" 
                        onClick={()=>setshowHelp(false)
                        }>

                        </MdOutlineClose>
                    </div>

                    <div className="message-chate">

                            {AddsendMessage !== ''  ?
                            AddsendMessage.map((Message,index)=>{
                                return(
                                    <div className="user-send" key={index}>
                                    <p>
                                    {Message}
                                    </p>
                                </div>
                                )
                            }):
                            null
                            }
                        {
                        showAnswer ?<div className="frais-send">
                            <p>
                            hello from frais
                            </p>
                        </div>:null
                        }
            </div>

                <div className="send-message">
                <input 
                type="text"
                placeholder="type your message..."
                onChange={(e)=>typesendMessageFun(e)}
                ></input>
                <MdSend 
                className="send-icon"
                onClick={()=>sendMessageFun()}
                ></MdSend>
                </div>

        </div>
        </div>
    )
}
export default Help