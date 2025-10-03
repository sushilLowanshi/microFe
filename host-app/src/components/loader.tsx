import React, { Suspense } from "react";
import ErrorBoundary from "./error-boundary";

type Props = {
  loader: () => Promise<any>;
  loading?: React.ReactNode;
  error?: React.ReactNode;
};

const RemoteLoader: React.FC<Props> = ({ loader, loading, error }) => {
  const Remote = React.lazy(() =>
    loader().catch((err) => {
      console.error("Failed to load remote:", err);
      return { default: () => <>{error ?? <h2>Module not available</h2>}</> };
    })
  );

  return (
    <ErrorBoundary fallback={error}>
      <Suspense fallback={loading ?? <h2>Loading...</h2>}>
        <Remote />
      </Suspense>
    </ErrorBoundary>
  );
};

export default RemoteLoader;
