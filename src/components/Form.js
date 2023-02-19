import React from 'react'
import './Form.css'

export default function Form() {
  return (
    <>
    <div>
        <h2>
            Form Input
        </h2>
        <p>
            Full Name
        </p>
        <input className='input' type="text" placeholder='John Doe' />
        <p>
            Mobile Number
        </p>
        <input className='input' type="number" placeholder='+91 970583043920' />
        <p>
            Age
        </p>
        <input className='input' type="text" placeholder='22/09/2006' />
        <p>
            Write Your Message
        </p>
        <input className='input messageInput' type="textarea" placeholder={`Lorem ipsum dolor sit amet consectetur.\n Felis laoreet \n elementum turpis odio a bibendum. Mi egestas commodo lorem egestas. Risus sagittis molestie tempus etiam eu et. Urna enim massa duis amet quis nunc. Vitae lectus.`} />
        <div className='submit'>
            Submit
        </div>
    </div>
    </>
  )
}
