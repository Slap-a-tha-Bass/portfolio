import React from "react";
import { Link } from "react-router-dom";
import {
  FootBarAcross,
  FootBarDivBottom,
  FootBarDivTop,
  FootBarP,
  PDFSizer,
  ResumeLink,
} from "../styled-components";

const FootBar = () => {
  return (
    <FootBarAcross>
      <FootBarDivTop>
        <Link to="/resume" className="text-decoration-none">
          <ResumeLink>
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
    </FootBarAcross>
  );
};

export default FootBar;
