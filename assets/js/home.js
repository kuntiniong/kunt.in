const mediaQuery = window.matchMedia("(max-width: 900px)");

function addStyle(styleString) {
  let style = document.createElement("style");
  style.id = "dynamic-style"; // add id
  document.head.append(style);

  style.textContent = styleString;
}

function resetStyle() {
  const style = document.getElementById("dynamic-style");
  if (style) { // error occurs if there are nulls
    style.remove();
  }
}

function handleMediaQueryChange(e) {
  const home = document.getElementById("home");

  if (e.matches) {
    home.innerHTML = `
      <div class="home-container">
        <h1 class="hero">Hi, I'm Kun Tin</h1>

        <svg class="kun-svg" width="580" height="469" viewBox="0 0 1160 939" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.120483 0.0616455H234.453V286.641L480.166 0.0616455L778.788 2.71018L515.342 286.124L355.499 446.484L234.453 573.22V758.41H0.120483V0.0616455Z" fill="#475360"/>
          <path d="M667 553L667 536.5V520L667 486.5C667 445.096 676.528 407.879 697.584 375.745C718.639 342.993 748.055 317.347 785.832 298.808C823.608 280.27 867.577 271 917.739 271C967.901 271 1011.25 280.27 1047.79 298.808C1084.33 317.347 1112.19 342.993 1131.39 375.745C1151.21 407.879 1160 445.443 1160 486.847V757H979.523V629.861V497.44C979.523 485.699 979.977 474.62 974.404 464.732C968.83 454.227 960.78 445.884 950.252 439.705C940.343 432.907 928.267 429.508 914.024 429.508C899.78 429.508 886.964 432.907 875.817 439.705C865.289 445.884 857.488 453.31 851.914 463.815C846.34 473.703 846.602 482.874 846.602 497.44L753.926 523.925L667 553Z" fill="url(#paint0_linear_0_1)"/>
          <path d="M848 271L848 545.947C848 587.158 833.594 623.757 812.495 655.742C791.396 688.342 761.919 713.868 724.064 732.321C686.209 750.774 642.149 760 591.883 760C541.617 760 498.177 750.774 461.564 732.321C424.95 713.868 397.025 688.341 377.787 655.741C357.929 623.757 348 587.158 348 545.947L348 271L529 271L528.851 534.612C528.851 546.299 529.516 557.326 535.101 567.168C540.686 577.625 548.754 585.928 559.303 592.079C569.232 598.845 581.333 602.228 595.606 602.228C609.88 602.228 622.601 598.845 633.771 592.079C644.321 585.928 652.388 577.625 657.974 567.168C663.559 557.326 667 546.187 667 534.5L667 271L848 271Z" fill="white"/>
          <rect y="757" width="1160" height="182" fill="#17C5AB"/>
          <path d="M348 271L529 271L348 454.5L348 271Z" fill="#475360" fill-opacity="0.43"/>
            <defs>
              <linearGradient id="paint0_linear_0_1" x1="913" y1="271" x2="913" y2="757" gradientUnits="userSpaceOnUse">
              <stop stop-color="white"/>
              <stop offset="1" stop-color="#17C5AB"/>
              </linearGradient>
            </defs>
          </svg>

        <p class="descrip">
          <em>Year-2 Data Science major</em> at
          <span>City University of Hong Kong</span>
          <br /><br />
          Currently a part of the

          <span class="google blue">G</span><span class="google red">o</span
          ><span class="google yellow">o</span><span class="google blue">g</span
          ><span class="google green">l</span><span class="google red">e</span>

          <span class="google">Developer Groups on Campus @CityUHK</span>

        </p>
      </div>
      <div class="contact-home">
        <a href="https://x.com/kuntiniong">X</a>
        <p>·</p>
        <a href="https://github.com/kuntiniong">GitHub</a>
        <p>·</p>
        <a href="https://behance.net/kuntin">Behance</a>
        <p>·</p>
        <a href="mailto:dev@kunt.in">dev@kunt.in</a>
      </div>
    `;
    resetStyle();
    addStyle(`
              #home {
                margin: 3.5vh 0 !important;
              }
              .home-container {
                text-align: center;
              }

              .kun-svg {
                height: 200px;
                width: 220px;
                padding: 30px 30px;
                margin: 25px 0;

                background-color: var(--svg-background);
                border-radius: 13px;
              }

              .hero {
                overflow: hidden;
                white-space: nowrap;

                font-size: 32px;

                color: transparent;
                font-weight: 1000;
                background-image: linear-gradient(to right, var(--primary-color), red);
                background-size: 200% 200%;
                background-clip: text;
                -webkit-background-clip: text;

                /* animation: typing 4s steps(30, end); */
                animation: colorTransition 2s ease infinite;
              }

              @keyframes typing {
                from {
                  width: 0;
                }
                to {
                  width: 100%;
                }
              }

              @keyframes colorTransition {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }

              .google {
                font-weight: 1000;
                color: var(--text-color);
              }

              .blue {
                color: #4285f4;
              }

              .green {
                color: #24a853;
              }

              .yellow {
                color: #fbbc05;
              }

              .red {
                color: #ea4335;
              }

              /* home contact */
              .contact-home {
                border-top: 1px solid var(--muted-color);
                padding-top: 2em; 
                display: flex;
                justify-content: center;
                margin-top: 5vh;
                gap: 3vw;
              }
      `);
  } else {
    home.innerHTML = `
    <div class="home-container">
        <div class="grid-container">

          <div class="left-container">
            <svg class="kun-svg" width="580" height="469" viewBox="0 0 1160 939" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.120483 0.0616455H234.453V286.641L480.166 0.0616455L778.788 2.71018L515.342 286.124L355.499 446.484L234.453 573.22V758.41H0.120483V0.0616455Z" fill="#475360"/>
              <path d="M667 553L667 536.5V520L667 486.5C667 445.096 676.528 407.879 697.584 375.745C718.639 342.993 748.055 317.347 785.832 298.808C823.608 280.27 867.577 271 917.739 271C967.901 271 1011.25 280.27 1047.79 298.808C1084.33 317.347 1112.19 342.993 1131.39 375.745C1151.21 407.879 1160 445.443 1160 486.847V757H979.523V629.861V497.44C979.523 485.699 979.977 474.62 974.404 464.732C968.83 454.227 960.78 445.884 950.252 439.705C940.343 432.907 928.267 429.508 914.024 429.508C899.78 429.508 886.964 432.907 875.817 439.705C865.289 445.884 857.488 453.31 851.914 463.815C846.34 473.703 846.602 482.874 846.602 497.44L753.926 523.925L667 553Z" fill="url(#paint0_linear_0_1)"/>
              <path d="M848 271L848 545.947C848 587.158 833.594 623.757 812.495 655.742C791.396 688.342 761.919 713.868 724.064 732.321C686.209 750.774 642.149 760 591.883 760C541.617 760 498.177 750.774 461.564 732.321C424.95 713.868 397.025 688.341 377.787 655.741C357.929 623.757 348 587.158 348 545.947L348 271L529 271L528.851 534.612C528.851 546.299 529.516 557.326 535.101 567.168C540.686 577.625 548.754 585.928 559.303 592.079C569.232 598.845 581.333 602.228 595.606 602.228C609.88 602.228 622.601 598.845 633.771 592.079C644.321 585.928 652.388 577.625 657.974 567.168C663.559 557.326 667 546.187 667 534.5L667 271L848 271Z" fill="white"/>
              <rect y="757" width="1160" height="182" fill="#17C5AB"/>
              <path d="M348 271L529 271L348 454.5L348 271Z" fill="#475360" fill-opacity="0.43"/>
              <defs>
                <linearGradient id="paint0_linear_0_1" x1="913" y1="271" x2="913" y2="757" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="#17C5AB"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div class="right-container">
            <h1 class="hero">Hi, I'm Kun Tin</h1>

            <p class="descrip">
              <em>Year-2 Data Science major</em> at
              <span>City University of Hong Kong</span>
              <br />
              Currently a part of the

              <span class="google blue">G</span><span class="google red">o</span
              ><span class="google yellow">o</span
              ><span class="google blue">g</span
              ><span class="google green">l</span
              ><span class="google red">e</span>

              <span class="google">Developer Groups on Campus @CityUHK</span>
            </p>
            <div class="contact-home">
              <a href="https://x.com/kuntiniong">X</a>
              <p>·</p>
              <a href="https://github.com/kuntiniong">GitHub</a>
              <p>·</p>
              <a href="https://behance.net/kuntin">Behance</a>
              <p>·</p>
              <a href="mailto:dev@kunt.in">dev@kunt.in</a>
            </div>
          </div>

        </div>
      </div>
    `;
    resetStyle();
    addStyle(`
              #home {
                margin: 3.5vh 0 !important;
              }

              .home-container {
                display: flex;
                justify-content: center;
              }

              .grid-container {
                display: grid;
                grid-template-columns: 1fr 1.9fr;
                align-items: center;
                gap: 1.5rem;

                margin-top: 10%;
              }

              .descrip {
                margin-top: 2em;
                line-height: 2.4 !important;  
              }

              .kun-svg {
                height: 13rem; /* aspect ratio -> 1:1.1 */
                width: 14.3rem;
                padding: 1.6rem 1.6rem;
                margin: 25px 0;

                background-color: var(--svg-background);
                border-radius: 13px;
              }

              /* home contact */
              .contact-home {
                padding-top: 0.5em; 
                display: flex;
                justify-content: left;
                margin-top: 1.5rem;
                gap: 3vw;
              }

              /* hero */
              .hero {
                overflow: hidden;
                white-space: nowrap;

                font-size: 2.2rem;

                color: transparent;
                font-weight: 1000;
                background-image: linear-gradient(to right, var(--primary-color), red);
                background-size: 200% 200%;
                background-clip: text;
                -webkit-background-clip: text;

                /* animation: typing 4s steps(30, end); */
                animation: colorTransition 2s ease infinite;
              }

              @keyframes typing {
                from {
                  width: 0;
                }
                to {
                  width: 100%;
                }
              }

              @keyframes colorTransition {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }

              .google {
                font-weight: 1000;
                color: var(--text-color);
              }

              .blue {
                color: #4285f4;
              }

              .green {
                color: #24a853;
              }

              .yellow {
                color: #fbbc05;
              }

              .red {
                color: #ea4335;
              }
    `);
  }
}

handleMediaQueryChange(mediaQuery);

mediaQuery.addEventListener("change", handleMediaQueryChange);
