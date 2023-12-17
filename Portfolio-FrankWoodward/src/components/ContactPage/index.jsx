import './style.css'


export default function ContactPage() {
  

    return (
      <>
        <div className="contact-info">
            <div className="socials-container">
                
            </div>
            <div className="submit-note-container">
            <textarea className="submit-box"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Let me know you dropped by..."
            />
            <button className="submit-note" onClick={handleSubmit}>Submit</button>
            </div>


        </div>
      </>
    )
  }