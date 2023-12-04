import profilePicture from "/src/assets/bakr-Al-Batran.jpeg";
import emailIcon from "/src/assets/email-logo.png";
import linkedinIcon from "/src/assets/linkedin-logo.png";

const Info = () => {

    return (
        <header>
            <img className="profile-picture" src={profilePicture} alt="profile picture" />
            <h1 className="name">Bakr Al-Batran</h1>
            <h3 className="profession">Software Engineer</h3>
            <h4 className="site">www.google.de</h4>
            <div className="contact">
                <a className="email" href="mailto:albatran2000@yahoo.com" target="_blank" rel="noreferrer"><img src={emailIcon} alt="email icon" /><span>Email</span></a>
                <a className="linkedin" href="https://www.linkedin.com/in/bakr-al-batran-4b78239/" target="_blank" rel="noreferrer"><img src={linkedinIcon} alt="linkedin icon" /><span>Linkedin</span></a>
            </div>
        </header>
    );
}

export default Info;