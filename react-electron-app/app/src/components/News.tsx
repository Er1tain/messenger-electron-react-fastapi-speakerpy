import { useNavigate } from "react-router-dom"

export default function News() {
    const nav = useNavigate();

    return (
        <div id="News">
            <div className="New">
                <h1>Сахарный бунт</h1>
                <p>wefwefeffwweffwe weffagq ag geragar gg. <br></br>efFefFEFEFE wegewg</p>
            </div>
            <button onClick={()=>nav('/')}>На главную</button>
        </div>
    )
}