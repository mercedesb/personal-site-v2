import React, { useState } from "react"
import { Button } from "components"

export function ContactForm() {
  const [showForm, setShowForm] = useState(true)
  const [error, setError] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target

    await fetch("https://getform.io/f/a0733c8c-2655-4dc1-a400-bf273b95f175", {
      method: "POST",
      body: new FormData(form),
    })
      .then(response => {
        if (response.status < 400) {
          setShowForm(false)
        }
        return response.json()
      })
      .then(data => {
        setError(data.error)
      })
  }

  return (
    <div>
      <h3>Get in touch</h3>
      {error && (
        <div>
          <h4 className="text-red-500">{error}</h4>
        </div>
      )}
      {showForm ? (
        <form className="flex flex-col w-full lg:w-3/4" onSubmit={handleSubmit}>
          <label className="flex flex-col">
            <span>Name</span>
            <input
              className="mb-8 p-2 dark:text-brown-900"
              type="text"
              name="name"
              required
            />
          </label>
          <label className="flex flex-col">
            <span>Email</span>
            <input
              className="mb-8 p-2 dark:text-brown-900"
              type="email"
              name="email"
              required
            />
          </label>
          <label className="flex flex-col">
            <span>Message</span>
            <textarea
              className="mb-8 p-2 dark:text-brown-900"
              rows="4"
              name="message"
              required
            />
          </label>
          <Button type="submit">Send</Button>
        </form>
      ) : (
        <div>
          <h4 className="text-green-500 font-bold">
            Thank you for your message, I'll be in touch soon!
          </h4>
        </div>
      )}
    </div>
  )
}
