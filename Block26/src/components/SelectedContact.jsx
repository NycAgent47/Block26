import React, { useState, useEffect } from "react";

function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
        );
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchContact();
  }, [selectedContactId]);

  if (!contact) return <div>Loading...</div>;

  return (
    <div className="contact-detail">
      <h1>{contact.name}</h1>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <button onClick={() => setSelectedContactId(null)}>
        Back to Contact List
      </button>
    </div>
  );
}

export default SelectedContact;
