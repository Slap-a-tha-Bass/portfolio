import React from 'react';

const RootLayout = ({children}) => {
    return (
        <main className="lucida bgcolor">
            <section className="row">
                {children}
            </section>
        </main>
    )
}

export default RootLayout;
