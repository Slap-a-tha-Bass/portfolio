import React from 'react';
import { Link } from 'react-router-dom';

const FootBar = () => {
    return (
        <div className="foot">
            <p className="copyright text-center text-muted mx-2">Copyright @Slap-a-tha-Bass 2021. </p>
            <p className="copyright text-center text-muted mx-2">All rights reserved.</p>       
            <Link className="copyright text-decoration-none text-muted mb-3 mx-2" to="/resume">See resume <i className="bi bi-file-earmark-pdf-fill h6"></i></Link>
        </div>
    )
}

export default FootBar;
