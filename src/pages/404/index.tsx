import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center text-light bg-dark">
      <h1>Error 404 | This page not found</h1>
      <p className="fs-3">
        Please <Link href="/">go back</Link> to safety
      </p>
    </div>
  );
};

export default ErrorPage;
