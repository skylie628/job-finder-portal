import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </button>
    </div>
  );
};

export default function AppProvider({ children }) {
  return (
    <HelmetProvider>
      <Suspense FallbackComponent={<ErrorFallback />}>
        <BrowserRouter>{children}</BrowserRouter>
      </Suspense>
    </HelmetProvider>
  );
}
