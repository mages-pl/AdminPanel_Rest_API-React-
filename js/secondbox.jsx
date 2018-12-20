import React from 'react';

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

export default SecondBox;