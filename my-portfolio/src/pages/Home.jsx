import "../styles/home.css"

function Home(){
    return (
        <div>
            <header className="nav">
                <nav className="links">
                    <button>Home</button>
                    <button>Projects</button>
                    <button>Contact Me</button>
                </nav>
            </header>

            <section className="hero">
                <h1>Hello, I'm Diego.</h1>
                <p>I build things for the web.</p>
            </section>

            <section className="about">
                <h2>About Me</h2>
                <p>Something, idk</p>
            </section>
        </div>
    );
}
export default Home;