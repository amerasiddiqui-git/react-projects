import style from "../styles/header.module.css"

function Header() {
    return (
        <div>
            <h1 className="header">this is header</h1>
            <button className={style.btn}>login header</button>
        </div>
    )
}

export default Header
