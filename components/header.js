import styled from 'styled-components';
import Link from 'next/link';

const HeaderWrapper = styled.div`
background: DarkOrange;
margin-bottom: ${({ isHome }) => (isHome ? '0' : '1.45rem')};
overflow: hidden;
position: relative;
height: ${({ isHome }) => (isHome ? '100vh' : '20vh')};
min-height: 180px;
text-align: right;
`;

const HeaderContainer = styled.div`
margin: 0 auto;
max-width: 960px;
padding: 1.45rem 1.0875rem;
position: relative;
z-index: 2;
display: flex;
justify-content: space-between;
`;

const Nav = styled.nav`
ul {
    list-style: none;
    @media(min-width: 649px) {
        display: flex;
        flex-wrap: wrap;
    }
    li {
        margin-left: 30px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans - serif;
        font-size: 1.2rem;
        text-align: right;
        list-style-position: inside;
      * {
        text-decoration: none;
        color: #fff;
            &:hover {
                color: #ddd;
                cursor: pointer;
            }
        }
    }
}
`;

const Header = () => (
    <HeaderWrapper>
        <HeaderContainer>
            <h2 style={{ margin: 0 }}>
                <Link href="/">
                    <a style={{ color: 'white', textDecoration: 'none', }}>Brew Story</a>
                </Link>
            </h2>
            <Nav>
                <ul>
                    <li>
                        <Link href="/recipes">
                            <a>
                                recipes
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/articles">
                            <a>
                                articles
                            </a>
                        </Link>
                    </li>
                </ul>
            </Nav>
        </HeaderContainer>
    </HeaderWrapper>
)

export default Header;