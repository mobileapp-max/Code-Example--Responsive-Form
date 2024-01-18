import Card from "../components/card";
import CustomButton from "../components/customButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMovieList } from "../apollo/hooks/useMovieList";
import { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  favoriteMovie: string;
};

const MyForm = () => {
  const [formCompleted, setFormCompleted] = useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    favoriteMovie: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "First name must be 2 or more characters")
      .required("You need to enter a first name."),
    lastName: Yup.string()
      .min(2, "Last name must be 2 or more characters")
      .required("You need to enter a last name."),
    favoriteMovie: Yup.string().notRequired(),
  });

  const handleSubmit = (values: FormState) => {
    setFormCompleted(true);
    console.log(formCompleted);
  };
  const { data: starWarsMovies, error, loading } = useMovieList();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Card>
          {!formCompleted ? (
            <Form style={{ alignItems: "center", alignContent: "center" }}>
              <h1 className="text-2xl font-bold text-left pb-4 text-gray-600">
                My form
              </h1>
              <div className="text-red-500 flex flex-col  pb-3">
                <div>
                  <ErrorMessage name="firstName" />
                </div>
                <div>
                  <ErrorMessage name="lastName" />
                </div>
                <div>
                  <ErrorMessage name="favoriteMovie" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  First name <label className="text-red-500">*</label>
                  <Field
                    name="firstName"
                    className={`mt-1 w-full px-3 py-2 border ${
                      errors.firstName && touched.firstName
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </label>
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Last name <label className="text-red-500">*</label>
                  <Field
                    name="lastName"
                    className={`mt-1 w-full px-3 py-2 border ${
                      errors.lastName && touched.lastName
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                  />
                </label>
              </div>
              <br />
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Favorite Star Wars movie
                <Field
                  as="select"
                  name="favoriteMovie"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a movie</option>
                  {starWarsMovies?.map((movie, index) => (
                    <option key={index} value={movie.title}>
                      {movie.title}
                    </option>
                  ))}
                </Field>
              </label>
              <div className="mt-4 w-full flex justify-end">
                <CustomButton disabled={false} type="submit" text="Submit" />
              </div>
            </Form>
          ) : (
            <div className="flex flex-grow">
              <h1 className="absolute text-2xl font-bold text-left pb-4 text-gray-600">
                My form
              </h1>
              <div className="flex flex-grow items-center justify-center ">
                Thanks for submitting the form!
              </div>
            </div>
          )}
        </Card>
      )}
    </Formik>
  );
};

export default MyForm;
