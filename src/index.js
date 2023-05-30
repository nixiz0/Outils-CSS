import ReactDOM from 'react-dom'

import App from './App.jsx'
import Animations from './Animations.jsx'
import Styles from './Styles.jsx'
import SEO from './Seo.jsx'
import Others from './Others.jsx'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/animations",
        element: <Animations />,
    },
    {
        path: "/styles",
        element: <Styles />,
    },
    {
        path: "/seo",
        element: <SEO />,
    },
    {
        path: "/others",
        element: <Others />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RouterProvider router={router} />
)

