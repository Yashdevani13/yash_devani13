import Button from "../Button/Button"
import styles from "./ContactFrom-moduls.css"
import { MdMessage } from "react-icons/md"
import { FaPhone } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import { useState } from "react";


const ContactFrom = () => {
    const [name,setName] = useState("yash");
    const [email,setEmail] = useState("yash@gmail.com");
    const [text,setText] = useState("hyyy");


    const onSubmit =(event) =>{
        event.preventDefault()

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    }
    return (
        <section className='container'>
            <div className='contact_from'>
                <div className="top-button">
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize='24px' />} />
                    <Button text="VIA CALL" icon={<FaPhone fontSize='24px' />} />
                </div>
                <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize='24px' />} />
                <form  onSubmit={onSubmit}>
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="text">Text</label>
                        <textarea name="text" id=""  rows="8"></textarea>
                    </div>
                    <div className="" style={{ 
                        display:"flex",
                        justifyContent:"end",
                         }}>
                        <Button text="SUBMIT BUTTON" />
                    </div>
                    <div>
                        { "Name : " + name} 
                    </div>
                    <div>
                        { "Email : " + email } 
                    </div>
                    <div>
                        { "Text : " + text} 
                    </div>
                </form>
            </div>
            <div className='contact_image'>
                <img src={require('./image/Service 24_7-pana 1.png')} alt="" />
            </div>
        </section>
    )
}

export default ContactFrom ;
