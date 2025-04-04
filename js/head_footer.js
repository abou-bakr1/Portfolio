class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>PORTFOLIO : AZABAR Aboubaker</title>
                <base href="./">
                <link rel="stylesheet" href="./styles/font.css" />
                <link rel="stylesheet" href="./styles/head_footer.css" />
            </head>

            <div class="myNav">
                <div class="nav_me">
                    <div class="O">O</div>
                    <div class="nav_name">
                        <h1 class="nav-title">AZABAR ABOUBAKER</h1>
                        <h2 class="nav-subtitle" style="font-size: 1.15rem;">Etudiant en Informatique<span style="color:lightgreen"> (Développeur)</span></h2>
                    </div>
                </div>

                <nav>
                    <a href="./index.html" aria-label="About Me"><b>A PROPOS DE MOI</b></a>
                    <a href="./pages/projets.html" aria-label="My Projects"><b>MES PROJETS</b></a>
                    <a href="./pages/disBonjour.html" aria-label="Say Hello"><b>DIS BONJOUR</b></a>
                </nav>
            </div>
        `;
        this.highlightActivePage();
    }

    highlightActivePage() {
        let currentPage = document.location.pathname.split("/").pop() || "index.html"; // Default to index.html
        let navLinks = this.querySelectorAll("nav a");

        navLinks.forEach(link => {
            let linkHref = link.getAttribute("href").split("/").pop(); // Get filename from href
            if (linkHref === currentPage) {
                link.classList.add("active"); // Apply active class
            } else {
                link.classList.remove("active");
            }
        });
    }
}

customElements.define('my-header', myHeader)

class myFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="myFooter">
                <div class="footer-content">
                    <div class="nav_me_footer">
                        <div class="O">O</div>
                        <div class="nav_name_footer">
                            <h1 class="nav-title_footer">AZABAR ABOUBAKER</h1>
                            <h2 class="nav-subtitle_footer" style="font-size: 1.15rem;">Etudiant en Informatique<span style="color:lightgreen"> (Développeur)</span></h2>
                        </div>
                    </div>
                    <nav class="footer-nav">
                        <a href="index.html">Info</a>
                        <a href="pages/projets.html">Projets</a>
                        <a href="pages/disBonjour.html">Contact</a>
                    </nav>
                    <div class="footer-info">
                        <p>email: abu.azabar@gmail.com</p>

                        <p>Suivez moi sur:
                            <a href="https://www.linkedin.com/in/aazabar/" class="social-icon">Linkedin</a>
                            <a href="https://github.com/abou-bakr1" class="social-icon">GitHub</a>
                            <a href="#" class="social-icon">X</a>
                        </p>
                    </div>
                </div>
            </footer>
        `
    }
}

customElements.define('my-footer', myFooter)

document.addEventListener("DOMContentLoaded", () => {
    let myNav = document.querySelector(".myNav");
    let nav = document.querySelector(".nav_me");
    myNav.dataset.nav = nav.outerHTML;
    document.addEventListener("scroll", navigation);
})

function navigation() {
    let myNav = document.querySelector(".myNav");
    let nav = document.querySelector(".nav_me");
    let navcss = document.querySelector(".myNav nav");

    if (window.scrollY > 150 && window.scrollY != 0) {
        nav.remove();
        navcss.classList.add("scrolled");
        myNav.classList.add("scrolled");
    } else {
        if (!document.querySelector(".nav_me")) { 
            myNav.insertAdjacentHTML("afterbegin", myNav.dataset.nav);
        }
        navcss.classList.remove("scrolled");
        myNav.classList.remove("scrolled");
    }
}

