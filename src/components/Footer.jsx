import githubLogo from '/src/assets/github-logo.png';
import xLogo from '/src/assets/twitter-logo.png';
import facebookLogo from '/src/assets/facebook-logo.png';
import instagramLogo from '/src/assets/instagram-logo.png';



const Footer = () => {
    return (
        <footer>
            <a href=""  alt="" target="_blank"><img src={githubLogo} alt="" /></a>
            <a href=""  alt="" target="_blank"><img src={xLogo} /></a>
            <a href=""  alt="" target="_blank"><img src={facebookLogo} alt="" /></a>
            <a href=""  alt="" target="_blank"><img src={instagramLogo} alt="" /></a>
        </footer>
      );
}
 
export default Footer;