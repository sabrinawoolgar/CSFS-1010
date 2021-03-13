import React from 'react'
import me from '../images/me.jpeg'

const Home = () => {
  return (
    <div className="homePage">

      <h2>hello!</h2>
            <div className="Homecontainer">
                <p className="Homeitem homeAbout"> My name is Sabrina, I am currently living in Hamilton, Ontario. However, I grew up living all across Canada! From Delta, British Colombia, to a small rural community in Nova Scotia that no one seems recognizes the name of, before finally winding up in downtown Toronto. <br></br><br></br>At the moment I work in Clinical Research, but my true passion is being creative and I would love to find myself in a more creative field. In my spare time I enjoy reading, playing video games, painting and sketching, practicing digital art or graphic design, gardening, photography, travelling, and hanging out with my two wonderful cats!</p>
                <img src={me} alt="me" className="Homeitem homeImage"/>
            </div>

    </div>
  );
}

export default Home;
