import { Link } from "react-router-dom";

function ShowsPage() {
  return (
    <div className="ShowsPageContainer">
      <p>ShowsPage</p>
      <Link to={"/shows/1"}>Show 1 details</Link>
      <Link to={"/shows/2"}>Show 2 details</Link>
    </div>
  );
}
export default ShowsPage;
