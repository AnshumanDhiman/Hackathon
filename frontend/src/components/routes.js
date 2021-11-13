
import Dashboard from "./views/Dashboard";

import Products from "./views/Products";

// import "../assets/css/animate.min.css";
// import "../assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
// import "../assets/css/demo.css";
// import "bootstrap/dist/css/bootstrap.min.css";



const dashboardRoutes = [
 
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/",
    name: "Logout ",
    icon: "nc-icon nc-notes",
    component: Products,
    layout: "",
  },


];

export default dashboardRoutes;
