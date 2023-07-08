// import '..scss'
import "./Style/Sidebar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faPaperclip,
    faPrescriptionBottle,
    faCalendarCheck
} from '@fortawesome/free-solid-svg-icons'

import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className="nav-bar">

                <nav>

                    <NavLink exact="true" activeclassname="active" to="/client">
                        <FontAwesomeIcon className="sideBarLink" icon={faHome} color="#4d4d4e" />
                    </NavLink>

                    <NavLink activeclassname="active" className="about-link" to="/clientbill">
                        <FontAwesomeIcon className="sideBarLink" icon={faPaperclip} color="#4d4d4e" />
                    </NavLink>

                    <NavLink
                        activeclassname="active"
                        className="skills-link"
                        to="/prescription"
                    >
                        <FontAwesomeIcon className="sideBarLink" icon={faCalendarCheck} color="#4d4d4e" />
                    </NavLink>

                    <NavLink
                        activeclassname="active"
                        className="contact-link"
                        to="/appointment"
                    >
                        <FontAwesomeIcon className="sideBarLink" icon={faPrescriptionBottle} color="#4d4d4e" />
                    </NavLink>

                </nav>
            </div>
        </>
    )
}

export default Sidebar