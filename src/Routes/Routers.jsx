import {createBrowserRouter} from 'react-router-dom'
import Main from '../layouts/Main';
import Home from '../pages/Home';
import ToDoUseState from '../components/ToDoUseState';
 const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/home',
                element:<Home></Home>,
            },
            {
                path:'/useState',
                element:<ToDoUseState></ToDoUseState>
            }
        ]
    }
])

export default router




