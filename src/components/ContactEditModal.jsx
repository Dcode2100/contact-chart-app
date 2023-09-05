import React, { useState, useEffect } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { editContact } from "../redux/contactSlice";

const ContactEditModal = ({ contact, onClose }) => {
  const dispatch = useDispatch();

  const contactData = useSelector((state) =>
    state.contacts.contactlist.find((c) => c.id === contact)
  );

  const [editedContact, setEditedContact] = useState(contactData);
  const [modalVisible, setModalVisible] = useState(false);


  useEffect(() => {

    setModalVisible(true);

  }, []);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedContact({ ...editedContact, [name]: value });
  };

  const handleStatusChange = (status) => {
    setEditedContact({ ...editedContact, isActive: status });
  };


  const handleSaveClick = () => {
    // Dispatch the editContact action with the updated contact data.
    dispatch(editContact({ id: contact, updatedContact: editedContact }));
    onClose();
  };

  return (
    <div className={`absolute h-full gap-7 flex-col flex justify-center items-center rounded-lg bg-accent w-full max-md:h-full transition-opacity duration-500 ${modalVisible ? "opacity-100" : "opacity-0"} `}>
      <div className="text-4xl max-xs:text-3xl text-secondary">Edit Contact</div>
      <div className="bg-secondary p-5 max-md:p-5 max-sm:relative rounded-md w-[20rem] max-xs:max-w-[80%] gap-2 flex flex-col">
        <label className="whitespace-nowrap" htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={editedContact.firstName && editedContact.firstName}
          onChange={handleInputChange}
          className="border border-black  rounded-md p-1"
        />
        <label className="whitespace-nowrap" htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={editedContact.lastName && editedContact.lastName}
          onChange={handleInputChange}
          className="border border-black  rounded-md p-1"
        />

        <div className="w-full flex gap-9 font-medium items-center ">
          <label>Status:</label>
          <div className="flex  flex-col">
            <label>
              <input
                type="radio"
                name="isActive"
                value="active"
                checked={editedContact.isActive === true}
                onChange={() => handleStatusChange(true)}
              />
              Active
            </label>
            <label>
              <input
                type="radio"
                name="isActive"
                value="inactive"
                checked={editedContact.isActive === false}
                onChange={() => handleStatusChange(false)}
              />
              Inactive
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Button onClick={handleSaveClick} className="border-black border p-3" label="Save" />
          <Button onClick={onClose} className="border-black border p-3 w-full" label="Cancel" />
        </div>
      </div>
    </div>
  );






};

export default ContactEditModal;
