import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from 'react-router-dom';
import Layout from './pages/Layout';
import AboutUs from './pages/AboutUs/AboutUs';
import LandingPage from './pages/LandingPage/LandingPage';
import MainPage from './pages/MainPage/MainPage';
import Instruction1 from './game/Instructions/Instruction1';
import Instruction2 from './game/Instructions/Instruction2';
import Instruction3 from './game/Instructions/Instruction3';
import Instruction4 from './game/Instructions/Instruction4';
import Instruction5 from './game/Instructions/Instruction5';
import Partida from './game/Partida/Partida';
import Login from './profile/Login';
import SignUp from './profile/SignUp';
import UserCheck from './protected/UserCheck';
import AdminCheck from './protected/AdminCheck';
import LogOutButton from './profile/Logout';
import Partidas from './game/Partida/Partidas';
import PartidaFinalizada from './game/Partida/PartidaFinalizada'

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <LandingPage />
        },
        {
          path: 'about-us',
          element: <AboutUs />
        },
        {
          path: 'main-page',
          element: <MainPage />
        },
        {
          path: 'instruction1',
          element: <Instruction1 />
        },
        {
          path: 'instruction2',
          element: <Instruction2 />
        },
        {
          path: 'instruction3',
          element: <Instruction3 />
        },
        {
          path: 'instruction4',
          element: <Instruction4 />
        },
        {
          path: 'instruction5',
          element: <Instruction5 />
        },
        {
          path: 'partidas',
          element: <Partidas />
        },
        {
          path: 'partida',
          element: <Partida />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'signup',
          element: <SignUp />
        },
        {
          path: 'usercheck',
          element: <UserCheck />
        },
        {
          path: 'admincheck',
          element: <AdminCheck />
        },
        {
          path: 'logout',
          element: <LogOutButton />
        },
        {
          path: 'partidafinalizada',
          element: <PartidaFinalizada />
        }
      ]
    },
    {
      path: '*', 
      loader: () => {
        return redirect('/')
      }
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default Router;