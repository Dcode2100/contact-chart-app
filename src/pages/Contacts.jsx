import React, { useState } from "react";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../redux/contactSlice";
import CreateContactModal from "../components/CreateContactModal";
import ContactEditModal from '../components/ContactEditModal';

const ContactCard = ({ item, handleEditClick }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteContact(item.id));
  };

  const statusClass = item.isActive ? "text-green-500" : "text-red-500";

  return (
    <div className={`border-primary border-4 rounded-md p-5 w-[20rem] max-xs:w-[17rem] flex flex-col gap-3`}>
      <div className="flex flex-col w-full gap-3">
        <span className={`w-full flex gap-1 font-medium `}>First Name: <p className="text-primary font-normal">{item.firstName.toUpperCase()}</p></span>
        <span className={`w-full flex gap-1 font-medium `}>Last Name: <p className="text-primary font-normal">{item.lastName.toUpperCase()}</p></span>
        <span className={`flex gap-1 font-medium `}>Status: <p className={`font-normal ${statusClass}`}>{item.isActive ? "Active" : "Inactive"}</p></span>
      </div>
      <div className="flex flex-col gap-3 ">
        <Button className="border-black border p-2" label="Edit" onClick={() => handleEditClick(item)} />
        <Button onClick={handleDeleteClick} className="border-black border p-2" label="Delete Contact" />
      </div>
    </div>
  );
};

const Contacts = () => {
  const [isAddingContact, setIsAddingContact] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  const contactList = useSelector((state) => state.contacts.contactlist);

  const toggleAddContact = () => {
    setIsAddingContact(!isAddingContact);
  };

  const toggleEditContact = (contact) => {
    setEditingContact(contact);
  };

  const handleCancelEdit = () => {
    setEditingContact(null);
  };


  return (
    <div className="flex relative h-full flex-col items-center gap-10 max-xs:p-0">
      <Button onClick={toggleAddContact} className="border-black border p-3 mt-5" label="Add New Contact" />
      {isAddingContact && (
        <CreateContactModal toggleAddContact={toggleAddContact} />
      )}
      {editingContact && (
        <ContactEditModal contact={editingContact} onClose={handleCancelEdit} />
      )}
      <ul className="contact-list flex flex-wrap gap-5  justify-center items-center mb-5">
        {contactList.map((item) => (
          <li key={item.id}>
            <ContactCard item={item} handleEditClick={() => toggleEditContact(item.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;






