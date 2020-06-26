import React from 'react'
import Header from './header'
import { cn } from '../lib/helpers'
import { TransitionState, TransitionPortal } from "gatsby-plugin-transition-link";

import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
      <Header siteTitle={siteTitle} />
      <TransitionPortal>
      <footer className={styles.footer}>
        <div className={styles.siteInfo}>
          <a href="mailto:hei@bransjen.no" target="_blank">hei@bransjen.no</a>
          <a href="mailto:hei@bransjen.no" target="_blank">Damstredet 8, 0123 Oslo</a>
          <img className={styles.smiley} src="/assets/smiley.svg" alt="Smiley som ser litt psycho ut" />
        </div>
      </footer>
      </TransitionPortal>
    <TransitionState>
      {({ mount, transitionStatus }) => {
        return (
          <>
            <div className={cn(siteTitle, styles.content, transitionStatus)}>{children}</div>
          </>
        )
      }}
    </TransitionState>
  </>
)

export default Layout
