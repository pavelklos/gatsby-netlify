import React from "react"
import { Link, navigate } from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"

const Test = () => (
  <PrimaryLayout column="col-md-10">
    This is where our test will go!
    <hr />
    <button onClick={() => navigate("/")}>Navigate To Homepage</button>
    <Link to="/about/" className="pl-3">
      Navigate To About
    </Link>
    {/* <h1>This is a test page 1!</h1> */}
    {/* <h1>This is a test page 2!</h1> */}
    {/* <button onClick={() => console.log("navigate")}>console.log</button> */}
  </PrimaryLayout>
)

export default Test
