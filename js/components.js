/**
 * components.js
 * Injects shared Navbar and Footer across all pages.
 */

const NavbarHTML = `
<div class="container">
    <nav>
        <div class="logo">
            <a href="index.html">PORTER<span>.IT</span></a>
        </div>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="skills.html">Skills</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        <div class="cta-btns">
            <a href="mailto:contact@muskan.dev" class="btn btn-primary">Let's Talk</a>
        </div>
        <div class="mobile-menu-btn">
            <i class="fas fa-bars"></i>
        </div>
    </nav>
</div>
`;

const FooterHTML = `
<div class="container">
    <div class="footer-content">
        <div class="footer-info">
            <div class="footer-logo">
                <a href="index.html" class="logo">PORTER<span>.IT</span></a>
            </div>
            <p>Empowering digital infrastructure with expert system administration and server management solutions.</p>
            <div class="social-links">
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
        </div>
        <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Me</a></li>
                <li><a href="skills.html">My Expertise</a></li>
                <li><a href="contact.html">Get in Touch</a></li>
            </ul>
        </div>
        <div class="footer-links">
            <h4>Services</h4>
            <ul>
                <li><a href="skills.html#sysadmin">System Administration</a></li>
                <li><a href="skills.html#server">Server Management</a></li>
                <li><a href="skills.html#linux">Linux Solutions</a></li>
                <li><a href="skills.html#office">Office Productivity</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Muskan IT Portfolio. All rights reserved.</p>
    </div>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    if (header) {
        header.innerHTML = NavbarHTML;
    }

    if (footer) {
        footer.innerHTML = FooterHTML;
    }

    // Add mobile menu toggle logic if needed
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});
