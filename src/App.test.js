import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
// import UserSearch from "./componets/layout/user/UserSearch"
// import App from "./App"
// eslint-disable-next-line no-unused-vars
import { Route, Routes, BrowserRouter } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { UsersContextProvider } from "./context/UsersContext"
import Home from "./pages/Home"
import Footer from "./componets/layout/Footer"
import Header from "./componets/layout/Header"
import UserContainer from "./componets/layout/user/UserContainer"
import Users from "./componets/layout/user/Users"
import UserDisplay from "./pages/UserDisplay"
import UserSearch from "./componets/layout/user/UserSearch"

// beforeEach(() => {
//   jest.spyOn(window, "fetch").mockImplementation(mockFetch)
// })

// afterEach(() => {
//   jest.restoreAllMocks()
// })

test("renders landing page", () => {
  render(
    <UsersContextProvider>
      <Home />
    </UsersContextProvider>,
  )

  const inputField = screen.getByRole(/textBox/i)
  expect(inputField).toBeInTheDocument()
  expect(inputField).toHaveDisplayValue("")

  const btn = screen.getByRole("button")
  expect(btn).toBeInTheDocument()
  // expect(btn).toBeDisabled()

  render(<Footer />)
  const text = screen.getByText(
    /designed and developed by TheTruthAboutTreasure/i,
  )
  expect(text).toBeInTheDocument()

  // render(<Header />)
  // const navbar = screen.getByText(/ThriveAgric Github Finder/i)
  // expect(navbar).toBeInTheDocument()
})

test("should perform Input validation when empty textbox is submitted ", () => {
  render(
    <UsersContextProvider>
      <UserSearch />
      <UserContainer />
    </UsersContextProvider>,
  )
  const btn = screen.getByRole("button")
  expect(btn).toBeInTheDocument()
  fireEvent.click(btn)
  expect(screen.getByText(/Enter something/i))
})

test("should search and display loading skeleton on button click", async () => {
  render(
    <UsersContextProvider>
      <UserSearch />
      <UserContainer />
    </UsersContextProvider>,
  )
  const btn = screen.getByRole("button")
  expect(btn).toBeInTheDocument()
  const searchField = screen.getByRole(/TextBox/i)
  userEvent.type(searchField, "paystack")
  fireEvent.click(btn)
  const skeleton = screen.getByTestId("skeleton")
  expect(skeleton).toBeInTheDocument()
})

test("should navigate back to home route on button click", () => {
  render(
    <UsersContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      ,
    </UsersContextProvider>,
  )
  const homeBtn = screen.getByAltText(/avatar/i)
  fireEvent.click(homeBtn)
  const inputField = screen.getByPlaceholderText(/search Users/i)
  expect(inputField).toBeInTheDocument()
})

// test("should navigate to another page on button click", () => {
//   render(
//     <UsersContextProvider>
//       <Users />
//     </UsersContextProvider>,
//   )
//   const viewProfile = screen.getByText(/view profile/i)
//   expect(viewProfile).toBeInTheDocument()
//   fireEvent.click(viewProfile)
// })
