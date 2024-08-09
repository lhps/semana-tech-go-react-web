import { Toaster } from 'sonner'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'

import { CreateRoomPage } from './pages/create-room'
import { RoomPage } from './pages/room'
import { queryClient } from './lib/react-query'

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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      <Toaster invert  richColors/>
    </QueryClientProvider>
  )
}