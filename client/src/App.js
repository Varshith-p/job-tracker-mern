import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Register, Landing, ProtectedRoute, Error } from "./pages";
import {
  SharedLayout,
  Welcome,
  AllJobs,
  AddJob,
  AppliedJobs,
} from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Welcome />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="applied-jobs" element={<AppliedJobs />} />
          <Route path="add-job" element={<AddJob />} />
        </Route>
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
