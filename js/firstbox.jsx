import React from 'react';
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
export default FirsBox; 