import React from "react";
import './menu.css'
class Menu extends React.Component {

    render() {
        return (
            <div>

                <nav>
                    <ul className="liste">
                        <li className="items">DashBoard</li>
                        <li className="items">Modifier l'API</li>
                    </ul>
                </nav>
            </div>

        )
    }
}   