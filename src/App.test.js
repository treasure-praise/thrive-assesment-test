import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders search users", () => {
  render(<App />)
  const linkElement = screen.getByText(/search users/i)
  expect(linkElement).toBeInTheDocument()
})
