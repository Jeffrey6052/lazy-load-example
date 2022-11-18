
import { Link, Outlet } from "react-router-dom"
import styled from "styled-components"

const Layout = (props) => {

  return (
    <LayoutStyled>
      <nav className="layoutNav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/demo1">Demo1</Link>
          </li>
          <li>
            <Link to="/demo2">Demo2</Link>
          </li>
        </ul>
      </nav>

      <div className="content">
        <Outlet />
      </div>
    </LayoutStyled>
  )
}

const LayoutStyled = styled.div`
  > .layoutNav {
    padding: 10px 16px;
    border-bottom: 1px solid rgba(0,0,0,0.15);

    ul, li {
      display: inline;
      padding: 0;
    }

    li {
      margin-right: 12px;
    }
  }

  > .content {
    padding: 16px;
  }
`

export default Layout