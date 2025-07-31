import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/about",
    element: <div>About</div>,
  }
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App