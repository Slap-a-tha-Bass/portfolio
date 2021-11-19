import React from 'react';

const RootLayout = ({children}) => {
    console.log('%c I am looking to get hired...if you like what you see, we should talk','border: 1px solid white; padding: 10px; border-radius: 5px; color: white; background-color: rgb(40,70,180); font-size: 20px; font-family: monospace');
    console.log('%c cdeloach16@gmail.com','border: 1px solid white; padding: 10px; border-radius: 5px; color: white; background-color: rgb(40,70,180); font-size: 20px; font-family: monospace');
    return (
        
        <main className="lucida bgcolor">
            <section className="row">
                {children}
            </section>
        </main>
    )
}

export default RootLayout;
