import { useNavigate, useParams } from 'react-router-dom';
// replaces the history prop

const Profile = () => {
  let navigate = useNavigate();
  let { username } = useParams();
  return (
    <>
      <h1>{username} Profile Page</h1>
      <br />
      {/* <button onClick={() => navigate('/about')}> */}
      {/* anything is passed into turns into string */}
      <button onClick={() => navigate('/about', { state: {name: "bob", age: 23, email: 'bob@email.com'} })}>
        {/* replaces the link than redirect */}
      {/* <button onClick={() => navigate('/about', { replace: true })}> */}
      {/* <button onClick={() => navigate('/about', replace )}> */}
      {/* navigate(-1) to go back A Page */}
      {/* navigate(-2) to go back 2 Pages */}
      {/* navigate(1) to go forward a Page */}
      {/* <a></a>  reloads the page and don't want it but still works*/}
        Change to about page
      </button>
    </>
  )
}

export default Profile;