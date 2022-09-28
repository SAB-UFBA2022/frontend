/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppProvider } from '../../../context/appContext'
import Login from '../../../pages/Login/index'

describe('Button component tests', () => {
  test('renders without crashing', () => {
    const pageLogin = render(
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    )

    expect(pageLogin)
  })
})
