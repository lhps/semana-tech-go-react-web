import { Toaster } from 'sonner'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { CreateRoomPage } from './pages/create-room'
import { RoomPage } from './pages/room'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateRoomPage />
  },
  {
    path: '/room/:roomId',
    element: <RoomPage />
  }
])

export function App() {
  return (
    <>
      <RouterProvider router={router}/>
      <Toaster invert  richColors/>
    </>
  )
}