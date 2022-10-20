import { fireEvent, render, screen } from "@testing-library/react"
import UserSearch from "./componets/layout/user/UserSearch"
// import App from "./App"
import Home from "./pages/Home"
// eslint-disable-next-line no-unused-vars
import UsersContext, { UsersContextProvider } from "./context/UsersContext"

test("renders search users", () => {
  render(
    <UsersContextProvider>
      <Home />
    </UsersContextProvider>,
  )
  const linkElement = screen.getByText(/ThriveAgric Github Finder/i)
  expect(linkElement).toBeInTheDocument()
})

test("renders search compoonent", () => {
  render(
    <UsersContextProvider>
      <Home />
    </UsersContextProvider>,
  )
  const placeholderInput = screen.getByPlaceholderText(/search users/i)
  expect(placeholderInput).toBeInTheDocument()
})

test("searches by test-id", () => {
  render(
    <UsersContextProvider>
      <UserSearch />
    </UsersContextProvider>,
  )

  const testId = screen.getByTestId(/searchBtn/i)
  expect(testId).toBeInTheDocument()
  fireEvent.click(testId)
  expect(testId).toHaveTextContent(/search/i)
})
