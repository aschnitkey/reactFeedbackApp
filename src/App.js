import React from "react";
import PropTypes from 'prop-types';

import Header from "./components/Header";

function App () {
    return (
        <>
        <Header text={"true"} />
            <div className="container">
                <h1>My App</h1>
            </div>
        </>
    );
}

Header.defaultProps = {
    text: 'Feedback UI'
}

Header.propTypes = {
    text: PropTypes.string
}

export default App;