import React, { useState,useEffect } from "react";
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

    const [modalVisible, setModalVisible] = useState(false);
   

    useEffect(() => {

        setModalVisible(true);


    }, []);

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
        <div className={`absolute h-full gap-7 flex-col flex justify-center items-center   rounded-lg bg-accent w-full max-md:h-full transition-opacity duration-500 ${modalVisible ? "opacity-100" : "opacity-0"
            }`}>
            <div className="text-4xl max-xs:text-3xl text-secondary ">Create Contact Screen</div>
            <div className="bg-secondary p-10 max-xs:relative  rounded-md w-[20rem] max-xs:w-[80%] gap-2 flex flex-col">
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
                    <Button className={"border-black border p-3"} onClick={handleSubmit} label={"Save Contact"} />
                    <Button
                        onClick={toggleAddContact}
                        className={" border-black border p-3 w-full "}
                        label={"Cancel"}
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateContactForm;
