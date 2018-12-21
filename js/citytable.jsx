import React from 'react';
class CityTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: [],
            sortType: "alfabFromEnd",
            ArrowNames: "fas fa-arrow-down",
            ArrowUsers: "fas fa-arrow-down",
            pageNumber: 0,
            classAcitve: "",
            next: false,
            prev: false
        }
    }
    ClickNumb = () => {
        if (this.state.sortType === "numFromsmall") {
            this.setState({
                sortType: "numFrombig",
                ArrowNames: null,
                ArrowUsers: "fas fa-arrow-up"
            })
        }
        else {
            this.setState({
                sortType: "numFromsmall",
                ArrowNames: null,
                ArrowUsers: "fas fa-arrow-down"
            })
        }
    }
    PageNumber(e) {
        this.setState({
            pageNumber: e,
            next: false,
            prev: false
        })
    }
    nextPageNumber(e) {
        if (this.state.pageNumber < 10) {

            this.setState({
                pageNumber: e + 1,
                next: true,
                prev: false
            }, () => {
                setTimeout(() => {
                    this.setState({
                        next: false
                    })
                }, 100)
            })
        }
        else {
            this.setState({
                pageNumber: 0
            })
        }
    }
    prevPageNumber(e) {
        if (this.state.pageNumber > 0) {
            this.setState({
                pageNumber: e - 1,
                prev: true,
                next: false
            }, () => {
                setTimeout(() => {
                    this.setState({
                        prev: false
                    })
                }, 100)
            }
            )
        }
        else {
            this.setState({
                pageNumber: 10
            })

        }
    }
    Click = () => {
        if (this.state.sortType === "alfabFromEnd") {
            this.setState({
                sortType: "alfabFromBegin",
                ArrowNames: "fas fa-arrow-up",
                ArrowUsers: null
            })
        }
        else {
            this.setState({
                sortType: "alfabFromEnd",
                ArrowNames: "fas fa-arrow-down",
                ArrowUsers: null
            })
        }
    }
    Rule() {
        if (this.state.sortType === "alfabFromEnd") {
            return this.state.city.sort(function (a, b) {
                if (b.cities < a.cities) { return -1; }
                if (b.cities > a.cities) { return 1; };
            })
        }
        else if (this.state.sortType === "alfabFromBegin") {
            return this.state.city.sort(function (a, b) {
                if (a.cities < b.cities) { return -1; }
                if (a.cities > b.cities) { return 1; };
            })
        }
        else if (this.state.sortType === "numFromsmall") {
            return this.state.city.sort(function (a, b) {
                return a.numbers - b.numbers;
            })
        } else if (this.state.sortType === "numFrombig") {
            return this.state.city.sort(function (a, b) {
                return b.numbers - a.numbers;
            })
        }
    }
    createPagination = () => {
        let table = []

        for (let i = 0; i <= 10; i++) {
            table.push(
                <li onClick={() => this.PageNumber(i)} className={`page-item ${this.state.pageNumber == i && "active"}`}>
                    <a className="page-link">{i + 1}</a>
                </li>
            )
        }
        return table
    }
    render() {
        const page = this.state.pageNumber;
        const sortedArray = this.Rule();
        const arr = sortedArray.slice(page * 10, page * 10 + 10);
        return (
            <div className="card">
                <div className="card-header">
                    <i className="fa fa-align-justify"></i> Wejscia uzytkownikow - Miasta</div>
                <div className="card-body">
                    <table className="table table-responsive-sm table-bordered">
                        <thead>

                            <tr>
                                <th onClick={this.Click}>Miasta     <i className={this.state.ArrowNames}></i></th>
                                <th onClick={this.ClickNumb}><center>Ilosc Uzytkowników <i className={this.state.ArrowUsers}></i>  </center></th>
                            </tr>
                        </thead>
                        <tbody>
                            {arr.map((el) => {
                                return <tr>
                                    <td style={{ color: "blue" }}><i>{el.cities}</i></td>
                                    <td style={{ color: "red" }}><center><b>{el.numbers}</b></center></td>
                                </tr>
                            })}
                        </tbody>

                    </table>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li onClick={() => this.prevPageNumber(this.state.pageNumber)} className={`page-item ${this.state.prev == true && "active"}`}>
                                <a className="page-link" tabindex="-1">Previous</a>
                            </li>
                            {this.createPagination()}

                            <li onClick={() => this.nextPageNumber(this.state.pageNumber)} className={`page-item ${this.state.next == true && "active"}`}>
                                <a className="page-link">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
    componentDidMount() {
        const arrCity = []
        let other = 0;
        let url = `https://www.googleapis.com/analytics/v3/data/ga?ids=ga%3A98761090&start-date=2017-01-01&end-date=2017-12-31&metrics=ga%3Ausers&dimensions=ga%3Acity&access_token=ya29.Glx5BkFSvgTuzKvIuldWOloDwUDZGNGynbD2l2uOutPTa5IS6TE7QDyJFhCD9ZyCjDkJRHddYxHffIoRMtC1U0GfdHzA__956pC81pD2DuAJxDq87y4z9OPizuE83Q`
        fetch(url).then(r => {
            return r.json()
        }).then(datafirst => {
            for (let i = 0; i < datafirst.rows.length; i++) {
                if (datafirst.rows[i][1] >= 10) {
                    arrCity.push({
                        "cities": datafirst.rows[i][0],
                        "numbers": datafirst.rows[i][1]
                    })
                }
                else {
                    other += +datafirst.rows[i][1]
                }
            }
            let url = `https://www.googleapis.com/analytics/v3/data/ga?ids=ga%3A98761090&start-date=2017-01-01&end-date=2017-12-31&metrics=ga%3Ausers&dimensions=ga%3Acity&start-index=1001&access_token=ya29.Glx5BkFSvgTuzKvIuldWOloDwUDZGNGynbD2l2uOutPTa5IS6TE7QDyJFhCD9ZyCjDkJRHddYxHffIoRMtC1U0GfdHzA__956pC81pD2DuAJxDq87y4z9OPizuE83Q`
            fetch(url).then(r => {
                return r.json()
            }).then(dataSecond => {
                for (let j = 0; j < dataSecond.rows.length; j++) {
                    if (dataSecond.rows[j][1] >= 10) {
                        arrCity.push({
                            "cities": dataSecond.rows[j][0],
                            "numbers": dataSecond.rows[j][1]
                        })
                    }
                    else {
                        other += +dataSecond.rows[j][1]
                    }
                }
                arrCity.push({
                    "cities": "Inne",
                    "numbers": other
                })
                this.setState({
                    city: arrCity
                })
            })
        })
    }
}
export default CityTable;