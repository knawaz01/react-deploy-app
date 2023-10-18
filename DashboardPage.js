// DashboardPage.js
import Chart from "../charts/Chart";
import "./DashboardPage.css"; // Import styles
import "../components/responsive.css";
import {
  FaCog,
  FaUser,
  FaMoneyBillAlt,
  FaBullhorn,
  FaQuestion,
  FaHome,
  FaBox,
  FaSearch,
} from "react-icons/fa"; // Import icons
import CircleChart from "../charts/CircleChart";

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      {/* Left Side Panel */}
      <div className="left-panel">
        <div className="dashboard-heading">
          <FaCog className="setting-icon" />
          <span className="dashboard-title">Dashboard</span>
        </div>
        <div className="dashboard-options ">
          <div className="option border">
            <FaHome className="option-icon margin" />
            Dashboard
          </div>
          <div className="option">
            <FaBox className="option-icon margin" />
            Products
          </div>
          <div className="option">
            <FaUser className="option-icon margin" />
            Customers
          </div>
          <div className="option">
            <FaMoneyBillAlt className="option-icon margin" />
            Income
          </div>
          <div className="option">
            <FaBullhorn className="option-icon margin" />
            Promotions
          </div>
          <div className="option">
            <FaQuestion className="option-icon margin" />
            Help
          </div>
        </div>
        <div className="manager-info">
          <img
            src={process.env.PUBLIC_URL + "manager-image.jpg"}
            alt="Manager"
          />
          <div className="manager-details">
            <span className="manager-name">Evana</span>
            <span className="manager-position">Project Manager</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <div className="greeting-box">
          <div className="greeting">
            <div>
              <span>Hello Shahrukh</span>
              <span className="wave" role="img" aria-label="Wave">
                👋,
              </span>
            </div>
          </div>
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="      search" />
          </div>
        </div>

        <div className="top-phase">
          <div className="profit-loss">
            <div className="earning-box">
              <div className="img-box">
                <img
                  src={process.env.PUBLIC_URL + "dollar.png"}
                  alt="dollar-sign"
                  className="dollar-sign"
                />
              </div>
              <div className="earning-details">
                <span className="small-font">Earning</span>
                <div className="earning-amount">
                  <span className="amount">$194k</span>
                </div>
                <div className="small-font">
                  <span className="arrow-green">&#129137; 37.8%</span>
                  <span className="date">this month</span>
                </div>
              </div>
            </div>
          </div>
          <div className="profit-loss">
            <div className="earning-box">
              <div className="img-box">
                <img
                  src={process.env.PUBLIC_URL + "order.png"}
                  alt="dollar-sign"
                  className="dollar-sign"
                />
              </div>
              <div className="earning-details">
                <span className="small-font">Order</span>
                <div className="earning-amount">
                  <span className="amount">$2.4k</span>
                </div>
                <div className="small-font">
                  <span className="arrow-red">&#129137; 2%</span>
                  <span className="date">this month</span>
                </div>
              </div>
            </div>
          </div>
          <div className="profit-loss">
            <div className="earning-box">
              <div className="img-box">
                <img
                  src={process.env.PUBLIC_URL + "balance.png"}
                  alt="dollar-sign"
                  className="dollar-sign"
                />
              </div>
              <div className="earning-details">
                <span className="small-font">Balance</span>
                <div className="earning-amount">
                  <span className="amount">$2.4k</span>
                </div>
                <div className="small-font">
                  <span className="arrow-red">&#129137; 2%</span>
                  <span className="date">this month</span>
                </div>
              </div>
            </div>
          </div>
          <div className="profit-loss">
            <div className="earning-box">
              <div className="img-box">
                <img
                  src={process.env.PUBLIC_URL + "sale.jpeg"}
                  alt="dollar-sign"
                  className="dollar-sign"
                />
              </div>
              <div className="earning-details">
                <span className="small-font">Total Sales</span>
                <div className="earning-amount">
                  <span className="amount">$89k</span>
                </div>
                <div className="small-font">
                  <span className="arrow-green">&#129137; 11%</span>
                  <span className="date">this month</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* charts  */}

        <div className="chart-container">
          <div className="barchart-box">
            <div className="overview-part">
              <div className="overview">
                <div className="overview-title">Overview</div>
                <div className="monthly-earning">Monthly earning</div>
              </div>
              <div className="time-dropdown">
                <select>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
            </div>
            <div className="barchart">
              <Chart />
            </div>
          </div>
          <div className="pie-chart-box">
            <div className="overview">
              <div className="Circle-header">
                <span className="Circle-title">Customer</span>
                <span className="monthly-earning">
                  Customers that buy products
                </span>
              </div>
            </div>
            <div className="pie-chart">
              <CircleChart />
            </div>
          </div>
        </div>

        {/* box 3 */}

        <div className="bottum-container">
          <div className="phase-3-top-part">
            <div className="product-sell">
              <span className="bold-text">Product Sell</span>
              <div className="right-section">
                <div className="search-box-bottum color">
                  <FaSearch className="search-icon" />
                  <input type="text" placeholder="      search" />
                </div>
                <select className="dropdown-menu">
                  <option>Last 30 Days</option>
                  {/* Add more options if needed */}
                </select>
              </div>
            </div>
          </div>

          {/* Phase 3 Bottom Part */}

          <div className="phase-3-bottom-part">
            <div className="product-name-section">
              <div className="product-name">product name</div>
              <div className="product-spt">
                <span className="product-stock">stock</span>
                <span className="product-price">price</span>
                <span className="product-total-sale">total-sale</span>
              </div>
            </div>
            <div className="product-details">
              <div className="product">
                <img
                  src={process.env.PUBLIC_URL + "p1.jpg"}
                  alt="Abstract 3D"
                />
                <span className="product-name">Abstract 3D</span>
              </div>
              <div className="details">
                <span className="product-stock font">32 in stock</span>
                <span className="product-price bold">$ 45.99</span>
                <span className="product-total-sale font">20</span>
              </div>
            </div>
            <div className="product-details">
              <div className="product">
                <img
                  src={process.env.PUBLIC_URL + "p2.jpg"}
                  alt="Abstract 3D"
                />
                <span className="product-name">Abstract 3D</span>
              </div>
              <div className="details">
                <span className="product-stock font">32 in stock</span>
                <span className="product-price bold">$ 45.99</span>
                <span className="product-total-sale font">20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
