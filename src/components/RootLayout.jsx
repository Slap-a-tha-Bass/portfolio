import React from 'react';

const RootLayout = ({children}) => {
    return (
        <main className="">
            <section className="row">
                {children}
            </section>
        </main>
    )
}

export default RootLayout;
