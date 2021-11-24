import React from "react";
import { Link } from "react-router-dom";
import {
  FootBarDivBottom,
  FootBarDivTop,
  FootBarP,
  PDFSizer,
  ResumeLink,
} from "../styled-components";

const FootBar = () => {
  return (
    <div className="chess-img">
      <FootBarDivTop>
        <Link to="/resume" className="text-decoration-none">
          <ResumeLink>
            Resume
            <PDFSizer>
              <i className="bi bi-file-earmark-pdf-fill"></i>
            </PDFSizer>
          </ResumeLink>
        </Link>
      </FootBarDivTop>
      <FootBarDivBottom>
        <FootBarP>Copyright @deloach.dev 2021.</FootBarP>
        <FootBarP>All rights reserved.</FootBarP>
      </FootBarDivBottom>
    </div>
  );
};

export default FootBar;
