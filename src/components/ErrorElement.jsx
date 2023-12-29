import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <h1 className="text-center text-4xl font-bold">There was an error...</h1>
  );
};

export default ErrorElement;
