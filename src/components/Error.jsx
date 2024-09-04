import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div class="flex items-center justify-center h-screen text-center">
  <div>
    <h1 class="text-4xl font-bold mb-4">Oops!!</h1>
    <p class="text-xl">Something went wrong!</p>
    <p class="text-lg text-gray-500 pt-2">{err.status} {err.statusText}</p>
  </div>
</div>

  )
}

export default Error;
