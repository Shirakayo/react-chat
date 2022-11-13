import React, { lazy, LazyExoticComponent, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Loader } from '@/shared/ui/loader'
import { authSelector } from '@/store/authSlice'
import {
  CONTACT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  MARKS_ROUTE,
  MEETS_ROUTE,
  MESSAGES_ROUTE,
  REGISTRATION_ROUTE,
  VOICES_ROUTE,
} from '@/utils/paths'

const AuthPage = lazy(() => import('./Authorization'))
const RegistrationPage = lazy(() => import('./Registration'))
const HomePage = lazy(() => import('./Home'))
const Messages = lazy(() => import('./Messages'))
const Voices = lazy(() => import('./Voices'))
const Contact = lazy(() => import('./Contacts'))
const Marks = lazy(() => import('./Marks'))
const Conferences = lazy(() => import('./Conferences'))

const publicRoutes: {
  path: string
  element: LazyExoticComponent<() => JSX.Element>
}[] = [
  { path: LOGIN_ROUTE, element: AuthPage },
  { path: REGISTRATION_ROUTE, element: RegistrationPage },
  { path: HOME_ROUTE, element: HomePage },
]

const privateRoutes = [
  { path: MESSAGES_ROUTE, element: Messages },
  { path: VOICES_ROUTE, element: Voices },
  { path: CONTACT_ROUTE, element: Contact },
  { path: MARKS_ROUTE, element: Marks },
  { path: MEETS_ROUTE, element: Conferences },
]

export const Routing = () => {
  const { isAuthenticated } = useSelector(authSelector)
  return (
    <Routes>
      {isAuthenticated &&
        privateRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <Suspense fallback={<Loader />}>
                <route.element />
              </Suspense>
            }
          />
        ))}
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense fallback={<Loader />}>
              <route.element />
            </Suspense>
          }
        />
      ))}
      <Route path="/*" element={<Navigate to={LOGIN_ROUTE} replace />} />
    </Routes>
  )
}
