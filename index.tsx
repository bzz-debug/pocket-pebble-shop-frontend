function spareFrontPage(){
    return(
    <>
     <body>
        <header>
          <h1>Pocket Pebble Shop</h1>

          <h3>Welcome to Pocket Pebble Shop</h3>
          <h3>
            We create custom potraits for you, featuring drawings of pets,
            friends, cars, anything you like!
          </h3>
          <h3>
            We also have a collection of pre-made pebbles you can purchase.
          </h3>
          <h3>
            <a href="#custom-pebbles">browse our collection</a>
          </h3>
        </header>
        <main>
          <section id="slideshow"></section>
          <section id="custom-pebbles">
            <h2 className="section-title">Custom Pebbles</h2>
            <p>ushuioshfsuoio</p>
            <div id="custom-image-gallery">
              <img src="./assets/custom/PP.29.03.202512.jpg" />
              <img src="./assets/custom/PP.29.03.202514.jpg" />
              <img src="./assets/custom/PP.29.03.202516.jpg" />
              <img src="./assets/custom/PP.29.03.202517.jpg" />
              <img src="./assets/custom/PP.29.03.20252.jpg" />
              <img src="./assets/custom/PP.29.03.20253.jpg" />
              <img src="./assets/custom/PP.29.03.20254.jpg" />
              <img src="./assets/custom/PP.29.03.20256.jpg" />

              {/*<img src=""/>
          <img src=""/>*/}
            </div>
          </section>
          <section id="premade-pebbles">
            <h2 className="section-title">Pre Made Pebbles</h2>
            <p>ushuioshfsuoio</p>
            <div id="premade-image-gallery">
              <img src="./assets/premade/PP.29.03.2025.jpg" />
              <img src="./assets/premade/PP.29.03.202511.jpg" />
              <img src="./assets/premade/PP.29.03.202513.jpg" />
              <img src="./assets/premade/PP.29.03.202515.jpg" />
              <form action="http://localhost:8080/pay" method="post">
                <input type="submit" value="Buy"></input>
              </form>

              <img src="./assets/premade/PP.29.03.20255.jpg" />
              <img src="./assets/premade/PP.29.03.20257.jpg" />
              <img src="./assets/premade/PP.29.03.20259.jpg" />
              <img src="./assets/premade/pebble-profile-picture.jpg" />
            </div>
          </section>
          <section id="about-section">
            <h2 className="section-title">About Pocket Pebble Shop</h2>
            <p>
              My name is Eileen, I am a retired Nurse from Lancashire. I have
              always loved creating art, and now that my career in the NHS has
              finished, I have the time to create keepsakes full time! I
              regularly go for walks along the Lancashire coast, where I
              find..............these lovely rocks that I paint for you and
              create little keepsakes.
            </p>
            <p>
              I am still currently setting up the purchasing feature of this
              website. If you would like to make a purchase, please head over to
              my Etsy Shop which can be found here:
              <a href="https://pocketpebbleshop.etsy.com">
                https://pocketpebbleshop.etsy.com
              </a>
            </p>
          </section>
          <section id="reviews">
            <h2>Read what some of our previous customers have to say!</h2>
            {/*img tags, with screenshots of Etsy reviews????*/}
            {/*eventually could have a reviewing feature on the website, link to trustpilot account, google reviews etc etc*/}
            <img src="./assets/reviews/Screenshot from 2025-07-18 10-14-07.png" />
            <img src="./assets/reviews/Screenshot from 2025-07-18 10-14-13.png" />
            <img src="./assets/reviews/Screenshot from 2025-07-18 10-14-24.png" />
            <img src="./assets/reviews/Screenshot from 2025-07-18 10-14-37.png" />
            <img src="./assets/reviews/Screenshot from 2025-07-18 10-14-47.png" />
            <img src="./assets/reviews/Screenshot from 2025-07-18 10-15-00.png" />
            <img src="" />
          </section>
          <section id="contact-form">
            <h2 className="section-title">Contact us to make a purchase!</h2>
            <div className="wrapper_inner">
              <form
                action="https://formspree.io/f/manjggwo"
                method="post"
                className="contact_form"
              >
                {/*dont forget to change the form ID!!!!!*/}
                <div className="flex">
                  <div className="form_group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                  </div>
                  <div className="form_group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                  </div>
                </div>
                <div className="form_group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message"></textarea>
                </div>
                <button type="submit">SEND MESSAGE</button>
              </form>
            </div>
          </section>
        </main>
        <footer>copyright stuff blah blah blah</footer>
        <script type="module" src="/src/main.js"></script>
      </body>
    </>)
}