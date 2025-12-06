import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { socials } from "#constants";
import { WindowControls } from "#components";

const Contact = () => {
    return (
        <>
        <div id = "window-header">
            <WindowControls target = "contact" />
            <h2>Contact Me</h2>
        </div>

        <div className = "p-5 space-y-5">
            <img src = "/images/naveen.jpg" alt = "Naveen" className = "w-50 rounded-full"/>

            <h3>Let's Connect</h3>
            <p>Got an idea? Or just want to say hi? Feel free to reach out!</p>
            <p>Contact: <a href="mailto:nvnkotturu@gmail.com" className="text-blue-600 ">nvnkotturu@gmail.com</a></p>
            
            <ul>
                {socials.map(({id, bg, link, icon, text}) => (
                    <li key = {id} style = {{backgroundColor: bg}}>
                        <a href = {link} target = "_blank" rel = "noopener noreferrer" title = {text}>
                            <img src={icon} alt={text} className = "size-5"/>
                            <p>{text}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );       
};

const ContactWindow  = WindowWrapper(Contact, "contact");

export default ContactWindow;