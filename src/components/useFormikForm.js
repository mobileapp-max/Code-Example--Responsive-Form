import { useFormik } from 'formik';

const useFormikForm = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        favoriteMovie: "",
    };

    const handleSubmit = (
        values,
        { setSubmitting }
    ) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
    });

    return formik;
};

export default useFormikForm;
