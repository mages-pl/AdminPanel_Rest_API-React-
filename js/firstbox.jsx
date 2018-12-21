import React from 'react';
class FirsBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tempC: "--",
            tempF: "--"
        }
    }
    render() {
        let d = new Date();
        let n = d.toLocaleDateString();
        return (
            <div className="col-sm-6 col-lg-3" >
                <div className="card text-white bg-primary">
                    <div className="card-body pb-0">
                        <div className="btn-group float-right">

                        </div>
                        <div className="text-value">{this.state.tempC}°C</div>
                        <div className="text-value">{this.state.tempF}°F</div>
                        <div>Temperatura we Wrocławiu {n} </div>
                    </div>
                    <div className="chart-wrapper mt-3 mx-3" style={{ height: "20px" }}>

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
                tempC: data.response.ob.tempC,
                tempF: data.response.ob.tempF
            })
            console.log()
        })
    }
}
export default FirsBox; 