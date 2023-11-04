import React from "react";
export default function lazyImport(path) {
  return React.lazy(() => import(path));
}
