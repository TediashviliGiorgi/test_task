import { useState } from 'react'
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navBar/Navbar"
import axios from 'axios'
import './Feedback.css'


const Feedback = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const validateFormData = async (e) => {
        const validateName = () => {
            if (/^[A-Za-z\s]+$/.test(name))
                return true;
            else
                alert('Please Input Correct Name!')
        }

        const validateEmail = () => {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                return (true)
            }

            return (false)
        }

        if (name === '' || email === '' || message === '') {
            alert('please fill all fields')
        }



        if (validateEmail() === true) {
            await sendData(e)
            
        } else {
            alert("You have entered an invalid email address!")
        }

    }

    const sendData = async (e) => {
        try {
            e.preventDefault()
            let formData = {
                name: name,
                email: email,
                message: message
            }
            console.log(formData)
            let postFeedbackUrl = ('https://test-task-api-optimo.herokuapp.com/feedback')
            await axios.post(postFeedbackUrl, formData)

            setName('')
            setEmail('')
            setMessage('')

            alert('Form submitted succesfully!')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <Navbar />
            <div className="title">

            </div>
            <div className="main">
                <form onSubmit={sendData}>
                    <p>
                        <label>Name</label>
                    </p>
                    <p>
                        <input
                            placeholder='Name'
                            type='text' name='Name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </p>

                    <p>
                        <label>Email</label>
                    </p>
                    <p>
                        <input
                            placeholder='Email'
                            type='email'
                            name='Email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </p>

                    <p>
                        <label>Message</label>
                    </p>
                    <p>
                        <input
                            placeholder='Message'
                            type='text'
                            name='Message'
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                    </p>

                </form>
                <button className="btn" onClick={validateFormData}>Submit</button>
            </div>
            <Footer />
        </>

    )
}

export default Feedback