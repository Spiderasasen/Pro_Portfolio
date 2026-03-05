import "../styles/home.css"

function Home(){
    return (
        <div>
            <header className="nav">
                <nav className="links">
                    <button id="home">Home</button>
                    <button>Projects</button>
                    <button id="contact">Contact Me</button>
                </nav>
            </header>

            <section className="hero">
                <h1>Hello, I'm Diego.</h1>
                <p>I build things for the web.</p>
            </section>

            <section className="about">
                <h2>About Me</h2>
                <p>I’m Diego, a full‑stack developer and engineering student with a strong focus on building clean, reliable, and maintainable software. I work across multiple languages and environments, including React, JavaScript, C, Python, and Java, and I enjoy understanding how systems function at a deeper level.<br/><br/>
                    My strengths are in logical problem‑solving, backend structure, and designing workflows that make tools easier to use and maintain. I approach every project with clarity, consistency, and a focus on long‑term quality.<br/><br/>
                    I’m continually expanding my skills and building projects that reflect both my technical growth and my interest in creating practical solutions that help people.</p>
            </section>
        </div>
    );
}
export default Home;