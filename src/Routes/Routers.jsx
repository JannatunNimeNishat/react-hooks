import {createBrowserRouter} from 'react-router-dom'
import Main from '../layouts/Main';
import Home from '../pages/Home';
import ToDoUseState from '../components/ToDoUseState';
import ToDoUseEffect from '../components/ToDoUseEffect';
import ToDoUseMemo from '../components/ToDoUseMemo';
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
            },
            {
                path:'/useEffect',
                element:<ToDoUseEffect></ToDoUseEffect>
            },
            {
                path:'/useMemo',
                element:<ToDoUseMemo></ToDoUseMemo>
            }
        ]
    }
])

export default router




