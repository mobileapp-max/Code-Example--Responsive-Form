import Card from "../components/card";
import CustomButton from "../components/customButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import isEmpty from "lodash/isEmpty";
import { useMovieList } from "../apollo/hooks/useMovieList";

type FormState = {
  firstName: string;
  lastName: string;
  favoriteMovie: string;
};

const MyForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    favoriteMovie: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "First name must be 2 or more characters")
      .required("First name is missing"),
    lastName: Yup.string()
      .min(2, "Last name must be 2 or more characters")
      .required("Last name is missing"),
    favoriteMovie: Yup.string().notRequired(),
  });

  const handleSubmit = (
    values: FormState,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  const { data: starWarsMovies, error, loading } = useMovieList();
  return (
    <Card>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <h1 className="text-2xl font-bold text-left pb-4 text-gray-600">
              My form
            </h1>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              First name <label className="text-red-500">*</label>
              <Field
                name="firstName"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="text-red-500 italic pl-1 absolute">
                <ErrorMessage name="firstName" />
              </div>
            </label>
            <br />
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Last name <label className="text-red-500">*</label>
              <Field
                name="lastName"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="text-red-500 italic pl-1  absolute">
                <ErrorMessage name="lastName" />
              </div>
            </label>
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
              <div className="text-red-500 italic pl-1  absolute">
                <ErrorMessage name="favoriteMovie" />
              </div>
            </label>
            <div className="mt-4 w-full flex justify-end">
              <CustomButton
                disabled={!isEmpty(errors) || isSubmitting}
                type="submit"
                text="Submit"
              />
            </div>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default MyForm;
