import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

type AppWrappersProps = {
  children: JSX.Element
}

const AppWrappers = ({ children }: AppWrappersProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

export default AppWrappers
