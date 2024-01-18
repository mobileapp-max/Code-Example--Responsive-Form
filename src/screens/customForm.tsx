import React, { useState } from "react";
import Card from "../components/card";
import CustomTextInput from "../components/customTextInput";
import CustomButton from "../components/customButton";

type FormState = {
  firstName: string;
  lastName: string;
  favoriteMovie: string;
};

const MyForm = () => {
  const [formState, setFormState] = useState<FormState>({
    firstName: "",
    lastName: "",
    favoriteMovie: "",
  });

  const handleSubmit = () => {
    // Submit form logic here
    console.log(formState);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-left pb-4  text-gray-600">
          My form
        </h1>
        <label className="block mb-2 text-sm font-medium text-gray-600">
          First name <label className="text-red-500">*</label>
          <CustomTextInput
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            name="firstName"
            value={formState?.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="block mb-2 text-sm font-medium text-gray-600">
          Last name <label className="text-red-500">*</label>
          <CustomTextInput
            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={formState?.lastName}
            name="lastName"
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Favorite Star Wars movie
          <select
            name="favoriteMovie"
            value={formState.favoriteMovie}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a movie</option>
            <option value="A New Hope">A New Hope</option>
            <option value="The Empire Strikes Back">
              The Empire Strikes Back
            </option>
            <option value="Return of the Jedi">Return of the Jedi</option>
          </select>
        </label>

        <div className="mt-4 w-full flex justify-end">
          <CustomButton onClick={handleSubmit} text="Submit" type="submit" />
        </div>
      </form>
    </Card>
  );
};

export default MyForm;
