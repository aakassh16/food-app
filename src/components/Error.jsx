import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div className="flex items-center justify-center h-screen text-center">
  <div>
    <h1 className="text-4xl font-bold mb-4">Oops!!</h1>
    <p className="text-xl">Something went wrong!</p>
    <p className="text-lg text-gray-500 pt-2">{err.status} {err.statusText}</p>
  </div>
</div>

  )
}

export default Error;
