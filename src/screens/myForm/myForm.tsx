import { useMovieList } from "./../../apollo/hooks/useMovieList";
import MyFormLogic from "./myFormLogic";
import MyFormPresentation from "./myFormPresentation";

const MyForm = () => {
  const { initialValues, validationSchema, handleSubmit, formCompleted } =
    MyFormLogic();
  const { data: starWarsMovies, error, loading } = useMovieList();

  return (
    <MyFormPresentation
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={handleSubmit}
      formCompleted={formCompleted}
      starWarsMovies={starWarsMovies}
      error={error}
      loading={loading}
    />
  );
};

export default MyForm;
