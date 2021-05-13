import Nav from '../components/Nav'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'
import { pastDate, todayDate } from '../libraries/datetime'
import { Button } from '../components/Button'
import Dropdown from '../components/Dropdown'

class Currency extends Component {
  // Setup
  constructor(props) {
    super(props)
    this.state = {
      available: [],
      base: 'HKD',
      target: 'USD',
      rate: 0,
      timeSeries: [],
      show_days: 30,
      start_date: pastDate(30),
      end_date: todayDate(),
      amount: 888,
      result: 0,
      isLoading: false,
      isError: false,
      chartData: [],
      chartLabel: [],
    }
  }
  async componentDidMount() {
    const response = await fetch(
      'https://openexchangerates.org/api/currencies.json',
    )
    if (response.ok) {
      const available = await response.json()
      this.setState({ available, isLoading: false }, () => this.updateRate())
    } else {
      this.setState({ isError: true, isLoading: false })
    }
  }
  renderAvailable = () => {
    return Object.keys(this.state.available).map((key, id) => {
      return (
        <option value={key} key={id}>
          {key}({this.state.available[key]})
        </option>
      )
    })
  }

  // Edit fields
  setBase = (base) => {
    this.setState({ ...this.state, base: base }, () => {
      this.updateRate()
    })
  }
  setTarget = (target) => {
    this.setState({ ...this.state, target: target }, () => {
      this.updateRate()
    })
  }
  setAmount = (amount) => {
    this.setState(
      { ...this.state, amount: amount !== '' ? parseInt(amount) : '' },
      () => this.convert(),
    )
  }
  setShowDays = (days) => {
    const start_date = pastDate(days)
    this.setState({ ...this.state, show_days: days, start_date }, () => {
      this.getRateTS()
    })
  }

  // Update actions
  convert = () => {
    this.setState({
      ...this.state,
      result: this.state.rate * this.state.amount,
    })
  }
  onSubmit = (e) => {
    if (e) {
      e.preventDefault()
    }
    this.convert()
  }
  async updateRate() {
    const url =
      'https://api.exchangerate.host/convert?from=' +
      this.state.base +
      '&to=' +
      this.state.target
    const response = await fetch(url)
    if (response.ok) {
      const result = await response.json()
      this.setState({ ...this.state, rate: result.result }, () => {
        this.convert()
        this.getRateTS()
      })
    }
  }
  getRateTS = () => {
    const url =
      'https://api.exchangerate.host/timeseries?start_date=' +
      this.state.start_date +
      '&end_date=' +
      this.state.end_date +
      '&base=' +
      this.state.base +
      '&symbols=' +
      this.state.target
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ ...this.state, timeSeries: result.rates }, () =>
          this.updateChart(),
        )
      })
  }
  updateChart = () => {
    const datetime = Object.keys(this.state.timeSeries)
    const daterate = Object.values(this.state.timeSeries)
    var arr = []
    datetime.map((key, id) => {
      return arr.push(daterate[id][this.state.target])
    })
    this.setState({ ...this.state, chartData: arr, chartLabel: datetime })
  }

  render() {
    // console.log('rendering')
    return (
      <div>
        <Nav title="CurrencyApp" />
        <div className="container p-4">
          <div className="card p-4">
            <h3> Currency Converter </h3>
            <form action="" onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor=""> Base Currency </label>
                    <Dropdown
                      name="type"
                      selected={this.state.base}
                      onChange={this.setBase}
                      data={this.state.available}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor=""> Target Currency </label>
                    <Dropdown
                      name="type"
                      selected={this.state.target}
                      onChange={this.setTarget}
                      data={this.state.available}
                    />
                  </div>
                </div>
                <div className="col text-center py-2">
                  Current Rate:{' '}
                  {this.state.rate && !this.state.isLoading
                    ? this.state.rate
                    : 'Loading...'}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor=""> Amount(From) </label>
                    <input
                      type="number"
                      className="form-control"
                      value={this.state.amount}
                      onChange={(e) => this.setAmount(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor=""> Amount(To) </label>
                    <input
                      type="number"
                      className="form-control"
                      value={this.state.result}
                      disabled
                    />
                  </div>
                </div>
              </div>
              <Button bgcolor="success" submit={true} text="Convert" />
            </form>
            <hr />
            <div className="row">
              <div className="col">
                <h3> Past Exchange Rate </h3>
              </div>
              <div className="col">
                <div className="input-group mb-3">
                  <input
                    type="number"
                    className="form-control"
                    value={this.state.show_days}
                    onChange={(e) => this.setShowDays(e.target.value)}
                  />
                  <span className="input-group-text" id="basic-addon2">
                    Days
                  </span>
                </div>
              </div>
            </div>
            <Line
              data={{
                labels: this.state.chartLabel,
                datasets: [
                  {
                    label:
                      'Exchange Rate from ' +
                      this.state.base +
                      ' to ' +
                      this.state.target +
                      ' in Past ' +
                      this.state.show_days +
                      ' Days',
                    data: this.state.chartData,
                    fill: false,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgba(255, 99, 132, 0.2)',
                  },
                ],
              }}
              options={{
                animation: {
                  duration: 0,
                },
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}
Currency.propTypes = {
  amount: PropTypes.number,
}

export default Currency
