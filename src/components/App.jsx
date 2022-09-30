import { useEffect, useState } from "react";

import ContactFormrm from "./Form/ContactForm";
import ContactsList from "./ContactsList/ContactsList";
import Filter from "./Filter/Filter";

const LC_KEY = "contacts"


export default function App() {
  const [contacts, setConstacts] = useState(() => JSON.parse(localStorage.getItem(LC_KEY)) || []);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem(LC_KEY, JSON.stringify(contacts))
  }, [contacts])
  

  const addContacts = (data) => {
         
    contacts.some(contact => contact.name.toLowerCase() === data.name.toLowerCase()) ?
      alert(`${data.name} is allready in contacts`) :
      setConstacts(prev => [...prev, data]);
  };
  
  const removeContacts = (id) => {setConstacts(prev => prev.filter((item) => item.id !== id))}
     
   const handleChange = (e) => {
     const { value } = e.target;
    setFilter(value)
  };

    const filteredContacts = () => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact => contact.name.toLowerCase()
        .includes(normalizedFilter))
  };

  const visibleContacts = filteredContacts()

  return (
     <div
        style={{
          padding: "32px",
          height: '100vh',
          display: 'flex',
          flexDirection: "column",
          alignItems: 'start',
          fontSize: 40,
          color: '#010101'
        }}
      >
        React homework template
        <h2 style={{fontSize: "25px"}}>Phonebook</h2>
        <ContactFormrm onSubmit={addContacts}  />
        <h2 style={{ fontSize: "25px" }}>Contacts</h2>
        <Filter filter={filter} handleChange={handleChange}/>
        <ContactsList contacts={visibleContacts}  removeContacts={removeContacts}  />
           
      </div>
  )
}


