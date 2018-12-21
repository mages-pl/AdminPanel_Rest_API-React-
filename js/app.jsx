
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import Money from './money.jsx';
import FirsBox from './firstbox.jsx';
import SecondBox from './secondbox.jsx';
import HolidaysTable from './holidaystable.jsx';
import CityTable from './citytable.jsx';
import {
    HashRouter,
    Route
} from 'react-router-dom';
  
class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Header />
                    <div className="app-body">
                        <div className="container">
                            <div className="row header justify-content-md-center"><FirsBox /><SecondBox /><Money/></div>
                            <Route exact path="/city" component={CityTable} />
                            <Route exact path="/holidays" component={HolidaysTable} />
                        </div>
                    </div>
                </div>
         </HashRouter>
        )
    }
}
document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('App')
    );
});






