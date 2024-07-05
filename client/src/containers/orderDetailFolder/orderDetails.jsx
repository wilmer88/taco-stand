import { useContext } from "react";
import NameField from "../../components/NameField";
import OrderDataContext from "../../context/orderDataContext";

const OrderDetails = () => {
  const { OrderContextObj, setOrderDataContext } = useContext(OrderDataContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(`Updating ${name} to ${value}`); // Debugging log
    setOrderDataContext((prevContext) => ({ ...prevContext, [name]: value }));
  };

  const handleNumberChange = (event) => {
    const { name, value } = event.target;
    const intValue = parseInt(value, 10);
    if (!isNaN(intValue)) {
      console.log(`Updating ${name} to ${intValue}`); // Debugging log
      setOrderDataContext((prevContext) => ({ ...prevContext, [name]: intValue }));
    }
  };

  return (
    <div className="is-align-content-center columns mt-3">
      <NameField
        nameOfInputField="Name:"
        placeholder="Ashley"
        name="nombreDeOrden"
        value={OrderContextObj.nombreDeOrden ||""}
        onChange={handleChange}
      />
      <NameField
        nameOfInputField="Phone#"
        placeholder="7063314752"
        name="phoneNumber"
        value={OrderContextObj.phoneNumber}
        onChange={handleNumberChange}
      />
      <NameField
        nameOfInputField={<>Table# (optional)</>}
        placeholder="14"
        name="tableNumber"
        value={OrderContextObj.tableNumber}
        onChange={handleNumberChange}
      />
    </div>
  );
};

export default OrderDetails;
