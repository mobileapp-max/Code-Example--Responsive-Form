import { Field } from "formik";

export const CustomField = ({
  errors,
  touched,
  name,
  title,
}: {
  errors: any;
  touched: any;
  name: string;
  title: string;
}) => {
  return (
    <div className="flex md:w-2/4 flex-col">
      <span className="block mb-2 text-sm font-medium text-gray-600">
        {title}
        <span className="text-red-500">*</span>
      </span>
      <Field
        name={name}
        className={`mt-1 w-full px-3 py-2 border ${
          errors.firstName && touched.firstName
            ? "border-red-500"
            : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 `}
      />
    </div>
  );
};
