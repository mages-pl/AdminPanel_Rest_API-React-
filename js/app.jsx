
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import FirsBox from './firstbox.jsx';
import SecondBox from './secondbox.jsx';
import HolidaysTable from './holidaystable.jsx';
import CityTable from './citytable.jsx';

class App extends React.Component {

    render() {
        return (
            <body className="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">

                <Header />

                <div className="app-body">
                    <div className="container">
                        <div className="row header justify-content-md-center"><FirsBox /><SecondBox /></div>
                        <div className="col-lg-12"><HolidaysTable /></div>
                        <div className="col-lg-12"><CityTable /></div>
                    </div></div>
            </body>
        )
    }
}
document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('App')
    );
});






