import { getAuth } from 'firebase/auth';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import app from './components/firebase/firebase.config';
import Home from './components/Home/Home';
import Images from './components/Image/Images';
import Login from './components/Login/Login';
import SignUp from './components/Sign Up/SignUp';
import Main from './layouts/Main';

const auth = getAuth(app);
const router = createBrowserRouter([

  {
    path: '/',
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Images></Images>
      },
      {
          path:'/home',
          element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signUp',
        element:<SignUp></SignUp>
      }
    ]
  }
])
function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
