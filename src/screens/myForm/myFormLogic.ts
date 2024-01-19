import { useState } from 'react';
import * as Yup from 'yup';

interface FormValues {
    firstName: string;
    lastName: string;
    favoriteMovie: string;
}

export default function MyFormLogic() {
    const [formCompleted, setFormCompleted] = useState<boolean>(false);
    const errorFields = ["firstName", "lastName", "favoriteMovie"];

    const initialValues: FormValues = {
        firstName: '',
        lastName: '',
        favoriteMovie: '',
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'First name must be 2 or more characters')
            .required('You need to enter a first name.'),
        lastName: Yup.string()
            .min(2, 'Last name must be 2 or more characters')
            .required('You need to enter a last name.'),
        favoriteMovie: Yup.string().notRequired(),
    });

    const handleSubmit = () => {
        setFormCompleted(true);
    };

    return { initialValues, validationSchema, handleSubmit, formCompleted, errorFields };
};
