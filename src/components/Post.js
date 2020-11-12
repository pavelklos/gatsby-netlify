import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'gatsby'

const Post = (props) => (
  // < Card style={{ width: '18rem' }}>
  <post>
    <div className="p-3" >
      <Card>
        {/* <Card.Img variant="top" src="gatsby.png" width="700" alt="gatsby image" /> */}
        <Card.Img variant="top" src={props.src} width="700" alt={props.alt || "default"} />
        <Card.Body>
          {/* <Card.Title>{props.title}</Card.Title> */}

          <Card.Title dangerouslySetInnerHTML={{ __html: props.title }} />
          {/* <Card.Text>{props.excerpt}</Card.Text> */}
          <Card.Text>
            <div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
          </Card.Text>
          {/* <Card.Text dangerouslySetInnerHTML={{ __html: props.excerpt }} /> */}
          {/* <Button variant="primary" href={props.readMore}>Read More...</Button> */}
          <Button variant="warning" as={Link} to={props.readMore}>Read More...</Button>
          {/* <button onClick={() => navigate("/")}> */}
        </Card.Body>
      </Card >
    </div >
  </post>
)

export default Post
