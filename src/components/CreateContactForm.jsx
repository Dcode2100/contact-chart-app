import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactSlice";
import Button from "./Button";

const CreateContactForm = ({ toggleAddContact }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        status: "active",
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData({
            ...formData,
            [name]: newValue,
        });
    };

    const handleSubmit = () => {
        dispatch(addContact(formData));
        setFormData({
            firstName: "",
            lastName: "",
            status: "active",
        });
        toggleAddContact();
    };

    return (
        <div className="flex flex-col gap-3">
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="p-2 rounded-md"
                value={formData.firstName}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                className="p-2 rounded-md"
                onChange={handleInputChange}
            />
            <div className="flex  gap-4  items-center">
                <label >Status:</label>
                <div className="flex  flex-col">
                    <label>
                        <input
                            type="radio"
                            name="status"
                            value="active"
                            checked={formData.status === "active"}
                            onChange={handleInputChange}
                        />
                        Active
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="status"
                            value="inactive"
                            checked={formData.status === "inactive"}
                            onChange={handleInputChange}
                        />
                        Inactive
                    </label>
                </div>
            </div>
            <Button className="border-black border p-3" onClick={handleSubmit} label={"Save Contact"} />
            <Button
                onClick={toggleAddContact}
                className={" border-black border p-3 w-full "}
                label={"Cancel"}
            />
        </div>
    );
};

export default CreateContactForm;
