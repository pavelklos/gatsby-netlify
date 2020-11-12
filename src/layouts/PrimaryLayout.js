import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from '../components/SEO'

const PrimaryLayout = props => (
  <div>
    <SEO />
    <Header />
    <main>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className={props.column}>
            <div className="pt-3">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
)

export default PrimaryLayout
