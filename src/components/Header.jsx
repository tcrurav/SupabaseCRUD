import "./Header.css";

function Header() {
  return (
    <div className="bicycle-list-menu">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/bicycle-add">New Bicycle</a></li>
        <li><a href="/restore-demo-values">Demo Values</a></li>
      </ul>
    </div>
  )
}

export default Header;