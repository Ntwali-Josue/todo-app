import React from "react";
import { useRouteMatch, Route, Link } from "react-router-dom";
import SinglePage from "./SinglePage";

const About = () => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${url}/about-author`}>About Author</Link>
        </li>
      </ul>
      <Route path={`${path}/:slug`}>
        <SinglePage />
      </Route>	
    </div>
  )
}

export default About;
