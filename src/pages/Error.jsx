import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const errorResponse = useRouteError();
  console.log(errorResponse);

  if (errorResponse.status === 404) {
    return (
      <main className="grid place-items-center min-h-screen px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="text-3xl font-bold  mt-4 tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-7">
            {"Sorry, we couldn't find the page you are looking for"}
          </p>
          <Link to="/">
            <button className="btn btn-secondary mt-10">Go Back Home</button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="grid place-items-center min-h-[100vh] px-8">
      <h4 className="text-4xl font-bold">Something went wrong...</h4>
    </main>
  );
};

export default Error;
