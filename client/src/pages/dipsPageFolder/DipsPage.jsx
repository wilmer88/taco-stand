import React, { useContext, useState, useEffect, useCallback } from "react";
import RegularNlargeComponent from "../../components/regularNlargeComponent/regularNlargeComponent";
import { Link } from "react-router-dom";
import AlertContext from "../../context/alertContext";
import { useNavigate } from "react-router-dom";
import "./dipPage.css";
import OrderDataContext from "../../context/orderDataContext";

const DipsPage = () => {
  const navigate = useNavigate();
  const { setAlert } = useContext(AlertContext);
  const { OrderContextObj, setOrderDataContext } = useContext(OrderDataContext);
  const [navmodal, setNavmodal] = useState("modal");

  const [dipPageOrders, setDipPageOrders] = useState({
    dips: [
      {
        id: 1,
        dipname: "Cheese Dip",
        price: 4.5,
        size: "Regular",
        quantity: 0,
      },
      { id: 2, dipname: "Cheese Dip", price: 8.75, size: "Large", quantity: 0 },
      {
        id: 3,
        dipname: "Guacamole Dip",
        price: "4.75",
        size: "Regular",
        quantity: 0,
      },
      {
        id: 4,
        dipname: "Guacamole Dip",
        price: "9.25",
        size: "Large",
        quantity: 0,
      },
      {
        id: 5,
        dipname: "Guaca Mix",
        price: "4.75",
        size: "Regular",
        quantity: 0,
      },
      {
        id: 6,
        dipname: "Guaca Mix",
        price: "11.75",
        size: "Large",
        quantity: 0,
      },
      {
        id: 7,
        dipname: "Sour Cream",
        price: "1.50",
        size: "Regular",
        quantity: 0,
      },
      {
        id: 8,
        dipname: "Chorizo Dip",
        price: "6.50",
        size: "Regular",
        quantity: 0,
      },
      {
        id: 9,
        dipname: "Bean Dip",
        price: "5.25",
        size: "Regular",
        quantity: 0,
      },
      {
        id: 10,
        dipname: "El Mezquites Dip Beef",
        price: "6.75",
        size: "Regular",
        quantity: 0,
      },
      {
        id: 11,
        dipname: "Texano Dip",
        price: "6.75",
        size: "Regular",
        quantity: 0,
      },
    ],
  });

  const handleDipIncrement = useCallback((id) => {
    setDipPageOrders((prevState) => {
      const newDips = prevState.dips.map((dip) =>
        dip.id === id ? { ...dip, quantity: dip.quantity + 1 } : dip
      );
      console.log("Dips after incrementing:", newDips);
      return { dips: newDips };
    });
  }, []);

  const dipDecrementHandler = (id) => {
    setDipPageOrders((prevState) => {
      const newDips = prevState.dips.map((dip) => {
        if (dip.id === id && dip.quantity > 0) {
          return { ...dip, quantity: dip.quantity - 1 };
        }
        return dip;
      });
      console.log("Dips after decrementing:", newDips);
      return { dips: newDips };
    });
  };

  const handleSave = () => {
    console.log("Saving dips with quantity > 0", dipPageOrders.dips);
    const filteredDips = dipPageOrders.dips.filter((dip) => dip.quantity > 0);
    console.log("Filtered dips:", filteredDips);

    if (filteredDips.length > 0) {
      setOrderDataContext((prevState) => ({
        ...prevState,
        dips: filteredDips,
      }));
      setAlert({ message: "Your dip order was updated", type: "success" });
      setTimeout(() => navigate("/orden"), 1250);
    } else {
      setAlert({ message: "No dips with quantities to save", type: "error" });
    }
  };

  const handlePageLoad = () => {
    // Checking if dips array in the context has any items
    if (OrderContextObj.dips?.length > 0) {
      const updatedDips = OrderContextObj.dips.map((contextDip) => {
        const existingDip = dipPageOrders.dips.find(
          (pageDip) => pageDip.id === contextDip.id
        );
        // This ensures any updates in quantity are reflected
        return existingDip
          ? { ...existingDip, quantity: contextDip.quantity }
          : contextDip;
      });
      setDipPageOrders({ dips: updatedDips });
    }
  };

  useEffect(() => {
    handlePageLoad();
    // console.log(dipPageOrders);
  });

  const showAboutModel = useCallback(() => {
    setNavmodal((prev) => (prev === "modal" ? "modal is-active" : "modal"));
  }, []);

  return (<>

      <footer id="dipnav" className="navbar is-fixed-bottom is-align-self-center">
        <p id="dipButtons" className="level-item has-text-right	">
          <Link to="/orden">
            <button className="button is-light is-small mr-3">Back</button>
          </Link>

          <button onClick={handleSave} className="button is-success is-small mr-3">
            Save Changes
          </button>

          <button  onClick={showAboutModel} className="button is-info is-small mr-1">
            Menu Image
          </button>
        </p>
      </footer>


      <div className="section">
        <div className="dipContainer is-size-6">
          <RegularNlargeComponent
            itemName="Cheese Dip"
            regularPriceDisplay="Regular ($4.75)"
            largePriceDisplay="Large ($8.75)"
            regularCounter={dipPageOrders.dips[0]?.quantity || 0}
            largeCounter={dipPageOrders.dips[1]?.quantity || 0}
            regularAddHandler={() => handleDipIncrement(1)}
            regularSubtractHandler={() => dipDecrementHandler(1)}
            largeHAddHandler={() => handleDipIncrement(2)}
            largeSubtractHandler={() => dipDecrementHandler(2)}
          />
          <RegularNlargeComponent
            itemName="Guacamole Dip"
            regularPriceDisplay="Regular ($4.75)"
            largePriceDisplay="Large ($9.25)"
            regularCounter={dipPageOrders.dips[2]?.quantity || 0}
            largeCounter={dipPageOrders.dips[3]?.quantity || 0}
            regularAddHandler={() => handleDipIncrement(3)}
            regularSubtractHandler={() => dipDecrementHandler(3)}
            largeAddHandler={() => handleDipIncrement(4)}
            largeSubtractHandler={() => dipDecrementHandler(4)}
          />
          <RegularNlargeComponent
            itemName="Guaca Mix"
            regularPriceDisplay="Regular ($7.50)"
            largePriceDisplay="Large ($11.75)"
            regularCounter={dipPageOrders.dips[4]?.quantity || 0}
            largeCounter={dipPageOrders.dips[5]?.quantity || 0}
            regularAddHandler={() => handleDipIncrement(5)}
            regularSubtractHandler={() => dipDecrementHandler(5)}
            largeAddHandler={() => handleDipIncrement(6)}
            largeSubtractHandler={() => dipDecrementHandler(6)}
          />

          <div className="is-mobile">
            <RegularNlargeComponent
              regularPriceDisplay={<strong>Sour Cream(1.50)</strong>}
              largePriceDisplay={<strong>Pico De Gallo(2.25)</strong>}
              regularCounter={dipPageOrders.dips[6]?.quantity || 0}
              largeCounter={dipPageOrders.dips[7]?.quantity || 0}
              largeAddHandler={() => handleDipIncrement(7)}
              largeSubtractHandler={() => dipDecrementHandler(8)}
            />

            <RegularNlargeComponent
              regularPriceDisplay={<strong>Chorizo Dip(6.50)</strong>}
              largePriceDisplay={<strong>Bean Dip(5.25)</strong>}
              regularCounter={dipPageOrders.dips[8]?.quantity || 0}
              largeCounter={dipPageOrders.dips[11]?.quantity || 0}
              regularAddHandler={() => handleDipIncrement(9)}
              regularSubtractHandler={() => dipDecrementHandler(9)}
            />

            <RegularNlargeComponent
              regularPriceDisplay={<strong>El Mezquites Dip(6.75)</strong>}
              largePriceDisplay={<strong>Texano Dip(2.25)</strong>}
              regularCounter={dipPageOrders.dips[8]?.quantity || 0}
              largeCounter={dipPageOrders.dips[11]?.quantity || 0}
              regularAddHandler={() => handleDipIncrement(9)}
              regularSubtractHandler={() => dipDecrementHandler(9)}
            />
          </div>

          <aside id="navLevelmodal" className={`${navmodal}`}>
            <div className="columns">
              <div className="column is-full">
                <div className="modal-background"></div>
                <div className="modal-content ">
                  <button
                    onClick={showAboutModel}
                    type="button"
                    className="modal-close is-large"
                    aria-label="close"
                  ></button>
                  <img
                    id="aboutImage"
                    src="./images/dipNachoAla.jpg"
                    alt="Los Mesquites About info 678 800-7036"
                    style={{ overflow: "hidden" }}
                  />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

    </>);
};

export default DipsPage;
