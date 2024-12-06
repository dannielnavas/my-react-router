import { Link, Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <section>
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to={"overview"}>Overview</Link>
        </li>
        <li>
          <Link to={"settings"}>Settings</Link>
        </li>
      </ul>
      <Outlet />
    </section>
  );
};

export { Dashboard };
