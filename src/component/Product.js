import React from "react";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div>
      <div className="wrapper">
        <div className="card">
          <div className="poster">
            <img
              src="https://cdn-images.farfetch-contents.com/18/95/27/46/18952746_42186669_1000.jpg"
              alt="Location Unknown"
            />
          </div>
          <div className="details">
            <h1>BLACK BALENCIAGA</h1>
            <h2>2021 • KIDS • Balenciaga</h2>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <span>4.2/5</span>
            </div>
            <div className="tags">
              <Link to="form">
                <span className="tag">GHC 300.00</span>
                <span className="tag">BUY NOW</span>
              </Link>
            </div>

            <div className="cast">
              <h3>Feartures</h3>
              <ul>
                <li>
                  <img
                    src="https://cdn-images.farfetch-contents.com/18/95/27/46/18952746_42184330_1000.jpg"
                    alt="Marco Andrews"
                    title="Marco Andrews"
                  />
                </li>
                <li>
                  <img
                    src="https://cdn-images.farfetch-contents.com/18/95/27/46/18952746_42184322_1000.jpg"
                    alt="Rebecca Floyd"
                    title="Rebecca Floyd"
                  />
                </li>
                <li>
                  <img
                    src="https://cdn-images.farfetch-contents.com/18/95/27/46/18952746_42185690_1000.jpg
"
                    alt="Antonio Herrera"
                    title="Antonio Herrera"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="poster">
            <img
              src="https://static.lefties.com/9/photos2/2023/I/0/2/p/5103/504/440/5103504440_2_3_2.jpg?t=1687427183089"
              alt="Location Unknown"
            />
          </div>
          <div className="details">
            <h1>MANDARIN COLLAR POLO SHIRT</h1>
            <h2>2020 • MEN • POLO</h2>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
              <span>4/5</span>
            </div>
            <div className="tags">
              <Link to="form">
                <span className="tag">GHC 400.00</span>
                <span className="tag">BUY NOW</span>
              </Link>
            </div>

            <div className="cast">
              <h3>Features</h3>
              <ul>
                <li>
                  <img
                    src="https://static.lefties.com/9/photos2/2023/I/0/2/p/5103/504/440/5103504440_2_2_2.jpg?t=1687427183089"
                    alt="Angelina Whyte"
                    title="Angelina Whyte"
                  />
                </li>
                <li>
                  <img
                    src="https://static.lefties.com/9/photos2/2023/I/0/2/p/5103/504/440/5103504440_2_1_2.jpg?t=1687427183089"
                    alt="Ivan Benson"
                    title="Ivan Benson"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="poster">
            <img
              src="https://static.lefties.com/9/photos2/2023/V/0/2/p/1101/502/528/1101502528_2_3_2.jpg?t=1669040171019"
              alt="Location Unknown"
            />
          </div>
          <div className="details">
            <h1>BASIC POLO SHIRT</h1>
            <h2>2021 • MEN • POLO SHIRT</h2>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <span>4.7/5</span>
            </div>
            <div className="tags">
              <Link to="form">
                <span className="tag yellow">GHC 450.00</span>
                <span className="tag">BUY NOW</span>
              </Link>
            </div>

            <div className="cast">
              <h3>Features</h3>
              <ul>
                <li>
                  <img
                    src="https://static.lefties.com/9/photos2/2023/V/0/2/p/1101/502/528/1101502528_2_2_2.jpg?t=1669040171019"
                    alt="Jessica Enduro"
                    title="Jessica Enduro"
                  />
                </li>
                <li>
                  <img
                    src="https://static.lefties.com/9/photos2/2023/V/0/2/p/1101/502/528/1101502528_2_1_2.jpg?t=1669040171019"
                    alt="Charles Garcia"
                    title="Charles Garcia"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
