import './Header.css'

const Header = (props) => {
  return (
    <div className="header">
      <div className='branding'>
        <img src="logo.png" alt="logo" className='shopLogo'></img>
        <h2>Demo E-Shop</h2>
      </div >

      <nav className="nav">
        <a href="https://www.linkedin.com/in/marius-ask-874109266/">LinkedIn</a>
        <a href="https://github.com/cappeesh">GitHub</a>
        <a href="mailto:marashz@gmail.com">E-Mail</a>
      </nav>
    </div >
  )
}

export default Header
