import React from 'react'

const Home = () => {
    return (
        <main className="container main">
            <section className="row d-flex justify-content-center">
                <div className="col-md-3">
                    <div className="Home-left text-center mt-2">
                        my name is <a href="https://www.linkedin.com/in/corey-deloach-061180124/" target="_blank" rel="noreferrer" className="link pt-1">corey deloach</a>
                    </div>
                    <div className="Home-center text-center mt-3">
                        i am an aspiring <p className="paragraph mt-2">full stack</p> software engineer
                    </div>
                    <div className="Home-right text-center mt-3">
                        i started learning code<p className="paragraph col-md-3 mt-2">1.5</p> years ago at the age of <p className="paragraph col-md-3 mt-2">29</p>
                    </div>
                    <div className="Home-center text-center mt-3">
                        i created this portfolio site with <p className="paragraph mt-2">CSS, Bootstrap</p> and <p className="paragraph mt-2">React</p>
                    </div>
                    <div className="Home-left text-center mt-3">
                        i thank <a className="link my-2 pt-1" target="_blank" rel="noreferrer" href="https://www.covalence.io">Covalence</a> for their help and mentorship
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;
