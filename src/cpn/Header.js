import Navi from "./Navi"

const Header = () => {
  return(
    <header className="App-header d-flex justify-content-between align-items-center px-lg-5">
    <h1 className="mb-0 py-2">
      <a href="" className="d-block">
        <img src="./img/logo.svg" className="img-fluid w-100" alt="logo" />
      </a>
    </h1>
    <Navi></Navi>
    <a href="#none"><img src="./img/kakao.svg" className="kakao img-fluid w-100" alt="카카오" /></a>        
    </header>
  )
}

export default Header;