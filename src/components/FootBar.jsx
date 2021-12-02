import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FootBarAcross,
  FootBarDivBottom,
  FootBarDivTop,
  FootBarP,
  PDFSizer,
  ResumeLink,
  SeeResumeSizer,
} from "../styled-components";

const FootBar = () => {
  const loc = useLocation();
  const [loadedResume, setLoadedResume] = useState(true);
  useEffect(() => {
    if (loc.pathname === '/resume') {
      setLoadedResume(false);
    } else {
      setLoadedResume(true);
    }
  }, [loc.pathname])

  return (
    <FootBarAcross>
      <FootBarDivTop>
        {loadedResume && <Link to="/resume" className="text-decoration-none">
          <ResumeLink>
            <PDFSizer>
              <i className="bi bi-file-earmark-pdf-fill"></i>
            </PDFSizer>
            <SeeResumeSizer>
            <i className="bi bi-caret-left-fill"></i>
            <i className="bi bi-caret-left-fill"></i>
            <i className="bi bi-caret-left-fill"></i>
            see resume
            </SeeResumeSizer>
          </ResumeLink>
        </Link>}
      </FootBarDivTop>
      <FootBarDivBottom>
        <FootBarP>Copyright @deloach.dev 2021.</FootBarP>
        <FootBarP>All rights reserved.</FootBarP>
      </FootBarDivBottom>
    </FootBarAcross>
  );
};

export default FootBar;
