const Background = function ({ setPopup }) {
    const clickHandler = function () {
      setPopup(false);
    };
  
    return (
      <div onClick={clickHandler} role="button" className="background"></div>
    );
  };
  
  export default Background;
  