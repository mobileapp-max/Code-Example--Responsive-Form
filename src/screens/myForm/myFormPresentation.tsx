import Card from "../../components/card";
import CustomButton from "../../components/customButton";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function MyFormPresentation({
  initialValues,
  validationSchema,
  handleSubmit,
  formCompleted,
  starWarsMovies,
  error,
  loading,
  errorFields,
}: {
  initialValues: {
    firstName?: string;
    lastName?: string;
    favoriteMovie?: string;
  };
  validationSchema: any;
  handleSubmit: (values: any) => void;
  formCompleted: boolean;
  starWarsMovies: { title: string }[];
  error: any;
  loading: boolean;
  errorFields: string[];
}) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched, isValid, isSubmitting }) => (
        <Card>
          {!formCompleted ? (
            <Form className="flex flex-col flex-grow justify-between">
              <div className="flex-grow">
                <h1 className="text-2xl font-bold text-left pb-4 text-gray-600">
                  My form
                </h1>
                <div className="text-red-500 flex flex-col  pb-3">
                  {errorFields.map((fieldName, index) => (
                    <div key={index}>
                      <ErrorMessage name={fieldName} />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex md:w-2/4 flex-col">
                    <span className="block mb-2 text-sm font-medium text-gray-600">
                      First name <span className="text-red-500">*</span>
                    </span>
                    <Field
                      name="firstName"
                      className={`mt-1 w-full px-3 py-2 border ${
                        errors.firstName && touched.firstName
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 `}
                    />
                  </div>
                  <div className="flex md:w-2/4 flex-col">
                    <span className="block mb-2 text-sm font-medium text-gray-600">
                      Last name <span className="text-red-500">*</span>
                    </span>
                    <Field
                      name="lastName"
                      className={`mt-1 w-full px-3 py-2 border ${
                        errors.lastName && touched.lastName
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 `}
                    />
                  </div>
                </div>
                <br />
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex md:w-2/4 flex-col">
                    <span className="block mb-2 text-sm font-medium text-gray-700">
                      Favorite Star Wars movie
                    </span>
                    <Field
                      as="select"
                      name="favoriteMovie"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">
                        {error
                          ? `Error loading movies, please try again later`
                          : loading
                          ? `Loading movies`
                          : `Select a movie`}
                      </option>
                      {starWarsMovies?.map((movie, index) => (
                        <option key={index} value={movie.title}>
                          {movie.title}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="flex md:w-2/4 flex-col "></div>
                </div>
              </div>
              <div className="mt-4  flex justify-end">
                <CustomButton
                  disabled={!isValid || isSubmitting}
                  type="submit"
                  text="Submit"
                />
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
}
