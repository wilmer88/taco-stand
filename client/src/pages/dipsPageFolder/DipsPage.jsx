import React, { useContext, useState, useEffect } from 'react';
import DipContext from '../../context/DipContext';
import RegularNlargeComponent from '../../components/regularNlargeComponent/regularNlargeComponent';
import { Link } from "react-router-dom";
import AlertContext from "../../context/alertContext";
import { useNavigate } from "react-router-dom";

const DipsPage = () => {

    const navigate = useNavigate();
    const { setAlert } = useContext(AlertContext);
    const { dipsArr, setDips } = useContext(DipContext);
    console.log(dipsArr);



    const [dipPageOrders, setDipPageOrders] = useState({
        dips: [
            { id: 1, dipname: "Cheese Dip", price: "4.50", size: "Regular", quantity: 0 },
            { id: 2, dipname: "Cheese Dip", price: "8.50", size: "Large", quantity: 0 },
            { id: 3, dipname: "Guacamole Dip", price: "4.75", size: "Regular", quantity: 0 },
            { id: 4, dipname: "Guacamole Dip", price: "9.25", size: "Large", quantity: 0 }
        ]
    });

    const handleDipIncrement = (id) => {
        setDipPageOrders(prevState => ({
            dips: prevState.dips.map(dip => dip.id === id ? { ...dip, quantity: dip.quantity + 1 } : dip)
        }));
    };

    const handleSave = () => {
        setDips(dipPageOrders.dips.filter(dip => dip.quantity > 0));
        setAlert({ message: "Your dip order was updated", type: "success" });
        setTimeout(() => navigate("/orden"), 1250);
    };

    const handlePageLoad = () => {

        if (dipsArr?.length > 0) {
            const updatedDips = dipsArr.map(contextDip => {
                const existingDip = dipPageOrders.dips.find(pageDip => pageDip.id === contextDip.id);
                return existingDip ? { ...existingDip, quantity: contextDip.quantity } : contextDip;
            });

            setDipPageOrders({ dips: updatedDips });
        }
    };

    useEffect(() => {
        handlePageLoad();
    }, []);


    return (
        <>
            <RegularNlargeComponent
                itemName="Cheese Dip"
                regularPriceDisplay="Regular ($4.50)"
                largePriceDisplay="Large ($8.50)"
                regularCounter={dipPageOrders.dips[0]?.quantity || 0}
                largeCounter={dipPageOrders.dips[1]?.quantity || 0}
                itemNameAddButtonR="cheeseDipRegular"
                itemNameAddButtonL="cheeseDipLarge"
                regularAddHandler={() => handleDipIncrement(1)}
                largeAddHandler={() => handleDipIncrement(2)}
            />
            <div className='columns is-responsive is-mobile is-centered'>
                <button onClick={handleSave} className="button is-success is-small mr-1">Save Changes</button>
                <Link to="/orden">
                    <button className="button is-light is-small ml-1">Back</button>
                </Link>
            </div>
        </>
    );
};

export default DipsPage;
