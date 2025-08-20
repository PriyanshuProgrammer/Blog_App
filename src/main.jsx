import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login_page, Sign_Up, Home,Addpost,AllPost } from './Pages/allpages.jsx'
import { Provider } from 'react-redux'
import Store from './Redux/storage.js'
import Post from './assets/Post/Post.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { 
        path: '/', 
        element: <Home /> 
      },
      { 
        path: '/login', 
        element: <Login_page /> 
      },
      { 
        path: '/signup', 
        element: <Sign_Up /> 
      },
      { 
        path: '/Addpost', 
        element: <Addpost /> 
      },
      { 
        path: '/Allpost', 
        element: <AllPost /> 
      },
      { 
        path: '/post/:id', 
        element: <Post /> 
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>,
)