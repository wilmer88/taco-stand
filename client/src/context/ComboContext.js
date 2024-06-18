import React, { createContext} from "react";

const defaultValue = {
  combo: [{
    comboId: 1,
    comboPrice: "0",
    supreme: false,
    choice1: "",
    choice2: "",
    key: 1,
  }],
};

const ComboContext = createContext({
  combo: defaultValue,
  setCombo: () => {}
});

export default ComboContext;