import React, { useState } from "react"; 
import "./calculator.css"; 
const Calculator = () => { 
  const [input, setInput] = useState(""); 
  const handleButtonClick = (value) => { 
    if (value === "C") { 
      setInput(""); 
    } else if (value === "=") { 
      try { 
        const result = evaluateExpression(input); 
        setInput(result); 
      } catch { 
        setInput("Error"); 
      } 
    } else { 
      setInput(input + value); 
    } 
  }; 
  const evaluateExpression = (expression) => { 
    const processedExpression = expression.replace(/(\d+(\.\d+)?)%([^0-9]|$)/g, "($1 / 100)$3"); 
    if (processedExpression.includes("//")) { 
      return handleFloorDivision(processedExpression); 
    } 
    const allowedCharacters = /^[\d+\-*/%.() ]+$/; 
    if (!allowedCharacters.test(expression)) { 
      throw new Error("Invalid input"); 
    } 
    return new Function(`return (${processedExpression});`)().toString(); 
  }; 
  const handleFloorDivision = (expression) => { 
    const [left, right] = expression.split("//").map(Number); 
    if (isNaN(left) || isNaN(right)) throw new Error("Invalid input"); 
    return Math.floor(left / right).toString(); 
  }; 
  const buttons = [ 
    "7", "8", "9", "/",  
    "4", "5", "6", "*",  
    "1", "2", "3", "-",  
    "0", ".", "00", "+",  
    "C", "%", "//", "=" 
  ]; 
 
  return ( 
    <div className="calculator"> 
      <div className="display">{input || "0"}</div> 
      <div className="buttons"> 
        {buttons.map((button, index) => ( 
          <button 
            key={index} 
            onClick={() => handleButtonClick(button)} 
            className={`button ${button === "C" ? "clear" : ""}`} 
          > 
            {button} 
          </button> 
        ))} 
      </div> 
    </div> 
  ); 
}; 
export default Calculator; 