import React from 'react'

const Home = () => {
    return (
        <main className="main">
            <section className="section">
                <div className="Home-left">
                    My name is <a href="https://www.linkedin.com/in/corey-deloach-061180124/" target="_blank" rel="noreferrer" className="paragraph-1 link">Corey DeLoach</a>.
                    <div className="left-arrow"></div>
                </div>
                <div className="Home-center">
                    I am an aspiring <p className="paragraph-1">full stack</p> software engineer.
                </div>
                <div className="Home-right">
                    I started learning <p className="paragraph-2">1.5</p> years ago at the age of <p className="paragraph-2">29</p>.
                </div>
                <div className="Home-center">
                    I created this portfolio site with <p className="paragraph-1">pure CSS</p> and <p className="paragraph-1">React</p>.
                </div>
                <div className="Home-left">
                    I thank <a className="link" target="_blank" rel="noreferrer" href="https://www.covalence.io">Covalence</a> for their help and mentorship.
                </div>
                <div className="Home-center">
                    I like <p className="paragraph-2">rounded borders</p> and <p className="paragraph-2">pastel colors</p>.
                </div>
            </section>
        </main>
    )
}

export default Home;
