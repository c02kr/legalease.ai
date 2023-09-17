import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="sb_footer section_padding">
            
            <hr></hr>
            <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                    <p>
                        @{new Date().getFullYear()} CodeInn. Allright reserved.
                    </p>
                </div>
                <div className="sb_footer-below-links">
                    <a href="/terms"><div><p>Terms &Conditions</p></div></a>
                    <a href="/privacy"><div><p>Privacy</p></div></a>
                    <a href="/security"><div><p>Security</p></div></a>
                    <a href="/cookie"><div><p>Declarations</p></div></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer