
import React from 'react';
import ReactDOM from 'react-dom';

class FirsBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: "--"
        }
    }
    render() {
        return (
            <div className="col-sm-6 col-lg-3" >
                <div className="card text-white bg-primary">
                    <div className="card-body pb-0">
                        <div className="btn-group float-right">

                        </div>
                        <div className="text-value">{this.state.description}°C</div>
                        <div>Temperatura we Wrocławiu </div>
                    </div>
                    <div className="chart-wrapper mt-3 mx-3" style={{ height: "70px" }}>

                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        let url = "https://api.aerisapi.com/observations/wroclaw,pl?client_id=l9I8YLTW6u3HvvgEnNPSR&client_secret=M5ci3ijinMwBpjyTRUwjcQcaIgEGre2Z3sgQe88E"
        fetch(url).then(r => {
            return r.json()
        }).then(data => {
            this.setState({
                description: data.response.ob.tempC
            })
            console.log()
        })
    }
}
class SecondBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: "--"
        }
    }
    render() {
        return (
            <div className="col-sm-6 col-lg-3" >
                <div className="card text-white bg-danger">
                    <div className="card-body pb-0">
                        <div className="btn-group float-right">

                        </div>
                        <div className="text-value">{this.state.description} </div>
                        <div>Dziś imieniny</div>
                    </div>
                    <div className="chart-wrapper mt-3 mx-3" style={{ height: "40px" }}>

                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        let url = "https://api.abalin.net/get/today?country=pl"
        fetch(url).then(r => {
            return r.json()
        }).then(data => {
            this.setState({
                description: data.data.name_pl
            })
        })
    }
}
class HolidaysTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            swieta: []
        }
    }
    render() {
        return (

            <div className="card">
                <div className="card-header">
                    <i className="fa fa-align-justify"></i> Swieta wejscia uzytkownikow</div>
                <div className="card-body">
                    <table className="table table-responsive-sm table-bordered">
                        <thead>
                            <tr>
                                <th>Nazwa Swieta</th>
                                <th><center>Data Swięta</center></th>
                                <th><center>ilość użytkownikow</center></th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.swieta.map((el, ) => {
                                return <tr>
                                    <td>{el.name}</td>
                                    <td><center>{el.date}</center></td>
                                    <td style={{ color: "red" }}><center><b>{el.user}</b></center></td>
                                    <td>
                                        <span className="badge badge-success">Active</span>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    componentDidMount() {
        let url = "https://holidayapi.pl/v1/holidays?key=7d3d56a9-b458-4dbb-baa4-15de4e627c3a&country=pl&year=2017"
        fetch(url).then(r => {
            return r.json()
        }).then(data => {
            const arrOne = []
            for (let key in data.holidays) {
                data.holidays[key].forEach(el => {
                    arrOne.push(el)
                });
            }
            this.analyticsHolidays(arrOne);
        })
    }
    analyticsHolidays(holidays) {
        let url = `http://localhost:3000/users`
        fetch(url).then(r => {
            return r.json()
        }).then(data => {

            const arr = holidays.map((el) => {
                for (let j = 0; j < data.length; j++) {

                    if (el.date == data[j].data) {
                        return {
                            ...el,
                            user: data[j].user
                        }
                    }
                }
            })
            this.setState({
                swieta: arr
            })
        })
    }
}
class CityTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: [],
            sortType: "alfabFromEnd",
            ArrowNames: "fas fa-arrow-down",
            ArrowUsers: "fas fa-arrow-down"
        }
    }
    ClickNumb = () => {
        if(this.state.sortType === "numFromsmall"){
            this.setState({
                sortType: "numFrombig",
                ArrowNames: null,
                ArrowUsers: "fas fa-arrow-up"
            })}
            else{
                this.setState({
                    sortType: "numFromsmall",
                    ArrowNames: null,
                    ArrowUsers: "fas fa-arrow-down"
                })}
    }

    Click = () => {
        if(this.state.sortType === "alfabFromEnd"){
        this.setState({
            sortType: "alfabFromBegin",
            ArrowNames: "fas fa-arrow-up",
            ArrowUsers: null
        })}
        else{
            this.setState({
                sortType: "alfabFromEnd",
                ArrowNames: "fas fa-arrow-down",
                ArrowUsers: null
            })}
    }
    Rule() {
        if(this.state.sortType === "alfabFromEnd") {
            return this.state.city.sort(function (a, b) {
                if (b.cities < a.cities) { return -1; }
                if (b.cities > a.cities) { return 1; };
            })
        }
        else if(this.state.sortType === "alfabFromBegin") {
            return this.state.city.sort(function (a, b) {
                if (a.cities < b.cities) { return -1; }
                if (a.cities > b.cities) { return 1; };
            })
        }
        else if(this.state.sortType === "numFromsmall") {
            return this.state.city.sort(function (a, b) {
                return a.numbers - b.numbers;
            })
        } else if(this.state.sortType === "numFrombig") {
            return this.state.city.sort(function (a, b) {
                return b.numbers - a.numbers;
            })
        }

    }
    render() {

        return (


            <div className="card">
                <div className="card-header">
                    <i className="fa fa-align-justify"></i> Swieta wejscia uzytkownikow</div>
                <div className="card-body">
                    <table className="table table-responsive-sm table-bordered">
                        <thead>
                            <tr>
                                <th onClick={this.Click}>Miasta     <i className={this.state.ArrowNames}></i></th>
                                <th onClick={this.ClickNumb}><center>Ilosc Uzytkowników <i className={this.state.ArrowUsers}></i>  </center></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.Rule().map((el) => {
                                return <tr>
                                    <td style={{ color: "blue" }}><i>{el.cities}</i></td>
                                    <td style={{ color: "red" }}><center><b>{el.numbers}</b></center></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    componentDidMount() {
        const arrCity = []
        let url = `https://www.googleapis.com/analytics/v3/data/ga?ids=ga%3A98761090&start-date=2017-01-01&end-date=2017-12-31&metrics=ga%3Ausers&dimensions=ga%3Acity&access_token=ya29.Glx3BqvHor3vulaKZcsx_tlD2z0P1pk6p83d3ipF0THu635s7qXNHraeiKP0IIsR9-gpXu9hm7HQJdISYas3MiP0zJk2NElR4sBwlZyVaEoM02Slii8ljfSlpAeQ2A`
        fetch(url).then(r => {
            return r.json()
        }).then(datafirst => {
            for (let i = 0; i < datafirst.rows.length; i++) {
                arrCity.push({
                    "cities": datafirst.rows[i][0],
                    "numbers": datafirst.rows[i][1]
                })
            }
            let url = `https://www.googleapis.com/analytics/v3/data/ga?ids=ga%3A98761090&start-date=2017-01-01&end-date=2017-12-31&metrics=ga%3Ausers&dimensions=ga%3Acity&start-index=1001&access_token=ya29.Glx3BqvHor3vulaKZcsx_tlD2z0P1pk6p83d3ipF0THu635s7qXNHraeiKP0IIsR9-gpXu9hm7HQJdISYas3MiP0zJk2NElR4sBwlZyVaEoM02Slii8ljfSlpAeQ2A`
            fetch(url).then(r => {
                return r.json()
            }).then(dataSecond => {
                for (let j = 0; j < dataSecond.rows.length; j++) {
                    arrCity.push({
                        "cities": dataSecond.rows[j][0],
                        "numbers": dataSecond.rows[j][1]
                    })
                }
                this.setState({
                    city: arrCity
                })
            })
        })
    }
}
class App extends React.Component {
    render() {
        return (
            <div>
                <div className="row header justify-content-md-center"><FirsBox /><SecondBox /></div>
                <div className="col-lg-12"><HolidaysTable /></div>
                <div className="col-lg-12"><CityTable /></div>
            </div>

        )
    }
}
document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('App')
    );
});






