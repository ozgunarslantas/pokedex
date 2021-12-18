import classNames from "classnames"
import { Routes, Route, Link, useLocation } from "react-router-dom"
import { InfinitePokedex } from "./components/infinitePokedex"
import { Pokedex } from "./components/pokedex"

const NavLink = ({ children, to }: { children: string; to: string }) => {
  const { pathname } = useLocation()
  return (
    <Link
      className={classNames("px-2 py-1 border", {
        "border-green-600 bg-green-200": pathname === to,
      })}
      to={to}
    >
      {children}
    </Link>
  )
}

function App() {
  return (
    <div className="flex flex-col w-screen h-screen p-2 overflow-hidden">
      <div className="flex justify-center gap-2 py-2">
        <NavLink to="/">Pokedex</NavLink>
        <NavLink to="/infinite">Infinite Pokedex</NavLink>
      </div>
      <div className="flex overflow-hidden">
        <div className="flex flex-col grow">
          <Routes>
            <Route path="*" element={<Pokedex />} />
            <Route path="/infinite" element={<InfinitePokedex />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
