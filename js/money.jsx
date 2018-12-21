import React from 'react';
class Money extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            PLN: "--"
        }
    }
    render() {
        const exchange = +this.state.PLN
        const resPln = exchange.toFixed(2);
        const resEur = (1 / resPln).toFixed(2);

        return (
            <div className="col-sm-6 col-lg-3" >
                <div className="card text-white bg-primary">
                    <div className="card-body pb-0">
                        <div className="btn-group float-right">
                        </div>
                        <div className="text-value">1 EUR to : {resPln} ZŁ</div>
                        <div className="text-value">1 PLN to : {resEur} EUR</div>
                    </div>
                    <div className="chart-wrapper mt-3 mx-3" style={{ height: "60px" }}>

                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        let url = "http://data.fixer.io/api/latest?access_key=5ddbcc768679746240fb8fa020bad7cc"
        fetch(url).then(r => {
            return r.json()
        }).then(data => {
            this.setState({
                PLN: data.rates.PLN
            })
            console.log()
        })
    }
}
export default Money; 