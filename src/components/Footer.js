import React from 'react'
import footerStyles from './Footer.module.css'

const Footer = () => (
  <footer className={footerStyles.footer}>
    <div className="container">
      <span className="text-muted">© {new Date().getFullYear()} Gatsby-Bootstrap Project</span>
      &nbsp;
      <span className="text-success pl-3">{new Date().toLocaleString()}</span>
    </div>
  </footer>
)

export default Footer