
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          description: "--"
        }
      }

    render(){
        return <h1>ssd</h1>
    }
    componentDidMount(){
        const dateGooglefirst = '2017-01-01'
        const dateGooglend = '2017-12-30'
        const metric = 'ga%3Ausers%2Cga%3Asessions%2Cga%3Apageviews'
        const acces = 'ya29.Glx2BklXhcBtrfLIJCCYBp3QgzkaPx2GEsUDN2I1_CHv7uJpBPybAuvCf7FrgT4DyoWXtop_pZ4nxcz1UQeZjEd3SU2qT6kWx4X55GyuLKuPRMTuYv4ddn4UYz-pmA'
        let url = `https://www.googleapis.com/analytics/v3/data/ga?ids=ga%3A98761090&start-date=2017-01-01&end-date=2017-12-31&metrics=ga%3Ausers&dimensions=ga%3Acity&access_token=ya29.Glx2BklXhcBtrfLIJCCYBp3QgzkaPx2GEsUDN2I1_CHv7uJpBPybAuvCf7FrgT4DyoWXtop_pZ4nxcz1UQeZjEd3SU2qT6kWx4X55GyuLKuPRMTuYv4ddn4UYz-pmA`
        fetch(url).then(r=>{
          return r.json()
        }).then(data=>{
          
          console.log(data.rows)
        })
      }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('App')
    );
});


