import React from "react";
import AuthProvider from "./providers/AuthProvider";
import DummyDataProvider from "./providers/DummyDataProvider";
import Router from "./router/Router";

const App = () => {
  return (
    <AuthProvider>
      <DummyDataProvider>
        <Router/>
      </DummyDataProvider>
    </AuthProvider>
  );
}

export default App;