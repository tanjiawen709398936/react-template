import React, { Suspense, lazy } from "react";

export default function AsyncLoad(fn) {
  const Component = lazy(fn);

  return function AsyncComponent(props) {
    return (
      <Suspense fallback={null}>
        <Component {...props}></Component>
      </Suspense>
    );
  };
}
