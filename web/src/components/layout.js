import React from 'react'
import Header from './header'
import { cn } from '../lib/helpers'
import { TransitionState } from "gatsby-plugin-transition-link";

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>

    <TransitionState>
      {({ mount, transitionStatus }) => {
        console.log(transitionStatus)
        return (
          <>
            <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} transitionStatus={transitionStatus} />
            <div className={cn(siteTitle, styles.content, transitionStatus)}>{children}</div>
          </>
        )
      }}
    </TransitionState>

    <footer className={styles.footer}>
      <div className={styles.siteInfo}>
        <a href="mailto:hei@bransjen.no" target="_blank">hei@bransjen.no</a>
        <a href="mailto:hei@bransjen.no" target="_blank">Damstredet 8, 0123 Oslo</a>
        <img className={styles.smiley} src="/assets/smiley.svg" alt="Smiley som ser litt psycho ut" />
      </div>
    </footer>
  </>
)

export default Layout
