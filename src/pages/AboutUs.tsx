import { NavLink } from "react-router-dom"

const AboutUs = () => {
  return <div id="AboutUs" className="AboutUs container">
    <NavLink to="team">Our team</NavLink>
    {/* <NavLink to="team">Our team</NavLink> */}
    <h1>About us</h1>
    <h2>Who we are</h2>
    <p>We are no ordinary company... we aim to be a Transformational Company. We operate our entire business on a "Win, Win, Win" principle. We love winning, but not at the expense of other people losing. We will not accept short term gain at the expense of longer term loss - to anyone. We want to demonstrate an attitude of abundance and generosity.</p>
    <p className="mb-0">With coaching at the foundation of what we do, our motivations is to:</p>
    <ul>
      <li>Be person focused - it is all about the people we work with</li>
      <li>Be Transformational not Transactional</li>
      <li>Use Creativity and Innovation</li>
      <li>Bring the best in people so they can live their best lives</li>
    </ul>

    <h2>Our values</h2>
    <p>A scelerisque purus semper eget duis. Gravida arcu ac tortor dignissim.</p>

    <p>Purus semper eget duis at tellus at urna. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Leo a diam sollicitudin tempor id eu nisl nunc mi. Tellus integer feugiat scelerisque varius morbi. Sed euismod nisi porta lorem mollis aliquam ut porttitor. Etiam tempor orci eu lobortis elementum nibh tellus. </p>

    <p>Interdum posuere lorem ipsum dolor sit. Eget mi proin sed libero. Leo vel orci porta non pulvinar. Molestie a iaculis at erat.</p>

  </div>
}

export default AboutUs