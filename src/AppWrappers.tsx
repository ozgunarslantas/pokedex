import { QueryClient, QueryClientProvider } from "react-query"
import { BrowserRouter } from "react-router-dom"

const queryClient = new QueryClient()

type AppWrappersProps = {
  children: JSX.Element
}

const AppWrappers = ({ children }: AppWrappersProps) => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </BrowserRouter>
)

export default AppWrappers
