import React from 'react';

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
                    <i className="fa fa-align-justify"></i> Wejscia uzytkownikow - Swieta</div>
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
export default HolidaysTable;