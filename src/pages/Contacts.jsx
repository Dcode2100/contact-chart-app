import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "../redux/contactSlice";
import ContactForm from "../components/CreateContactForm";

const ContactCard = ({ item }) => {
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  const handleDeleteClick = () => {
    dispatch(deleteContact(item.id));
  };

  return (
    <div className="border-primary border-4 rounded-md p-5  w-[20rem] max-xs:w-[17rem] flex flex-col gap-3" >
      <div className="flex flex-col w-full gap-3">
        <span className="w-full flex gap-1 font-medium">First Name: <p className="text-primary font-normal">
          {item.firstName.toUpperCase()} </p></span>
        <span className="w-full flex gap-1 font-medium">Last Name: <p className="text-primary font-normal">
          {item.lastName.toUpperCase()} </p></span>
        <span className="flex gap-1 font-medium">Status:  <p className="font-normal">
          {item.isActive ? "Active" : "Inactive"}</p></span>
      </div>
      <div className="flex flex-col gap-3 ">
        <Button className={" border-black border p-2 "} label={"Edit"} />
        <Button onClick={handleDeleteClick} className={" border-black border p-2 "} label={"Delete Contact"} />
      </div>
    </div>

  )
}

const Contacts = () => {
  const [isAddingContact, setIsAddingContact] = useState(false);
  const toggleAddContact = () => {
    setIsAddingContact(!isAddingContact);
  };
  const contactList = useSelector((state) => state.contacts.contactlist);
  useEffect(() => {
    console.log(contactList)
  }, [contactList])
  return (
    <div className="flex justify-center relative h-max items-center flex-col gap-10 p-4 max-xs:p-0 ">
      <Button onClick={toggleAddContact} className={" border-black border p-3 "} label={"Add New Contact"} />
      {isAddingContact &&
        <div className="absolute flex justify-center items-center   gap-3 flex-col  bg-accent h-full  w-full ">
          <div className=" bg-secondary p-10 max-xs:relative  rounded-md w-[20rem] max-xs:w-[80%] gap-2 flex flex-col">
            <ContactForm toggleAddContact={toggleAddContact} />
          </div>
        </div>
      }
      <ul className="contact-list flex flex-wrap gap-5 justify-center items-center">
        {contactList.map((item) => (
          <li key={item.id}><ContactCard item={item} /></li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
