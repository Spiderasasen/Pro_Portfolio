
function Home(){
    return(
      <div>
          {/*for the button*/}
          <div className="Butto_Header">
              <button id="Home">Home</button>
              <button id="Projects">Projects</button>
              <button id="Contact">Contact Me</button>
          </div>

          {/*for the home screen*/}
          <div className="main_screen">
              {/*main section for the eye catching section*/}
              <h1>Something Eye Catching</h1>

              {/*about me*/}
              <div className="about_me">
                  <h3>About Me</h3>
                  <p>Something, idk</p>
              </div>
          </div>
      </div>
    );
}
export default Home;