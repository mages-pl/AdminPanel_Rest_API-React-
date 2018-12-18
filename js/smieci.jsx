import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      description: "--"
    }
  }

  render() {
    return (
    <div>
      <h1>Pogoda:</h1>
      <p>dzisiaj jest: <span>{this.state.description}</span></p>
    </div>
    );
  }

  componentDidMount(){
    let url = "http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22"
    fetch(url).then(r=>{
      return r.json()
    }).then(data=>{
      this.setState({
        description: data.weather[0].description
      })
      console.log()
    })
  }
}

export default App;



<div class="row header justify-content-md-center">
                        <div class="col-sm-6 col-lg-3">
                          <div class="card text-white bg-primary">
                            <div class="card-body pb-0">
                              <div class="btn-group float-right">
                                
                              </div>
                              <div class="text-value">151</div>
                              <div>Members online</div>
                            </div>
                            <div class="chart-wrapper mt-3 mx-3" style="height:70px;">
                              <canvas class="chart" id="card-chart1" height="70"></canvas>
                            </div>
                          </div>
                        </div>
                        
                        <div class="col-sm-6 col-lg-3">
                          <div class="card text-white bg-warning">
                            <div class="card-body pb-0">
                              <div class="btn-group float-right">
                              </div>
                              <div class="text-value">9.823</div>
                              <div>Members online</div>
                            </div>
                            <div class="chart-wrapper mt-3" style="height:70px;">
                              <canvas class="chart" id="card-chart3" height="70"></canvas>
                            </div>
                          </div>
                        </div>
                      </div>