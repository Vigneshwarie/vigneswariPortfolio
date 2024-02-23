import github_logo from '../assets/images/github-icon.png';
import linkedin_logo from '../assets/images/linkedin-icon.png';

function Footer() {
     return (
          <footer>
               <p>
                    <small> &copy; Developed by Vigneswari Sambandam</small>
               </p>
               <address>
                    <p><img src="{github_logo}" /><a href="https://github.com/Vigneshwarie/">GitHub</a></p>
                    <p><img src='{linkedin_logo}' /><a href="https://www.linkedin.com/in/vigneswari-sambandam-37b03730/">LinkedIn</a></p>
                </address>
          </footer>
     );
}

export default Footer;