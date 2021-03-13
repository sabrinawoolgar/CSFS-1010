import React, {useState} from 'react'


const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [content, setContent] = useState("")

    const formSubmit = async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:4000/contact_form/entries', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name, email, phoneNumber, content})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
        } else {
            alert(`Congrats! Submission submitted with id: ${payload.id}`)
        }
    }


  return (
    <div className="ContactPage">

        <h2>contact</h2>
            <div className="BodyContent">
                <p>If you would like to get in touch, please complete the form below</p>
                <br></br>
                    <form onSubmit={formSubmit}>
                        <p> <label htmlFor="name"> name:</label>
                            <br /><input type="text" name="name" id="name" className="textbox" required value={name} onChange={e => setName(e.target.value) } /> </p>
                        <p><label htmlFor="email">email address:</label>
                            <br /><input type="email" name="email" id="email" className="textbox" required value={email} onChange={e => setEmail(e.target.value) } /></p>
                        <p><label htmlFor="phoneNumber">phone number:</label>
                            <br /><input type="phoneNumber" name="phoneNumber" id="phoneNumber" className="textbox" required value={phoneNumber} onChange= {e => setPhoneNumber(e.target.value) } /></p>
                        <p><label htmlFor="content">details:</label>
                            <br /><textarea rows={8} cols={65} placeholder="briefly tell me a bit about yourself, and your reason for getting in touch" name="content" id="content" required defaultValue={""} value={content} onChange={e => setContent(e.target.value) } /></p>

                        <p><input type="submit" id="submit" defaultValue="submit" className="button" /><input type="reset" defaultValue="clear form" className="button" /></p>
                    </form>
            </div>

    </div>
  );
}

export default Contact;
