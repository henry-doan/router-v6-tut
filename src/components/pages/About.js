import { Outlet, useLocation } from 'react-router-dom';

const About = () => {
  let location = useLocation();
  const { name, age, email } = location.state;
  return (
    <>
      <h1>About Page { name }</h1>
      <p>{age}</p>
      <p>{email}</p>
      <Outlet />
    </>
  )
}

export default About;