import NavBar from './NavBar';
import Footer from './Footer';
import MetaTags from './Metatags';

const Layout = ({ children }) => {
  return (
    <>
      <MetaTags/>
      <NavBar />
      <main className='container'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout