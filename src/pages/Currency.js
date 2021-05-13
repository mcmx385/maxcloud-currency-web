import Nav from '../components/Nav'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Line } from 'react-chartjs-2'
import { compareDates, pastDate } from '../libraries/datetime'
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
      start_date: pastDate(31),
      end_date: pastDate(1),
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
    const past_days = compareDates(this.state.end_date, pastDate(1))
    const start_date = pastDate(parseInt(days) + parseInt(past_days) + 1)
    this.setState({ ...this.state, show_days: days, start_date }, () => {
      this.getRateTS()
    })
  }
  setStartDate = (start_date) => {
    if (start_date > this.state.end_date) {
      this.setState(
        {
          ...this.state,
          start_date: this.state.end_date,
          end_date: start_date,
        },
        () => this.getRateTS(),
      )
    } else {
      this.setState({ ...this.state, start_date }, () => this.getRateTS())
    }
  }
  setEndDate = (end_date) => {
    if (end_date < this.state.start_date) {
      this.setState(
        {
          ...this.state,
          end_date: this.state.start_date,
          start_date: end_date,
        },
        () => {
          this.getRateTS()
          this.setEndDate(this.state.end_date)
        },
      )
    } else {
      const past_days = compareDates(end_date, pastDate(1))
      const start_date = pastDate(
        parseInt(this.state.show_days) + parseInt(past_days) + 1,
      )
      this.setState({ ...this.state, end_date, start_date }, () =>
        this.getRateTS(),
      )
    }
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
                    <label htmlFor=""> Amount (From) </label>
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
                    <label htmlFor=""> Amount (To) </label>
                    <input
                      type="number"
                      className="form-control"
                      value={this.state.result}
                      disabled
                    />
                  </div>
                </div>
              </div>
              {/* <Button bgcolor="success" submit={true} text="Convert" /> */}
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
                    Past Days
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
                      ' (' +
                      this.state.start_date +
                      ' to ' +
                      this.state.end_date +
                      ') [' +
                      this.state.show_days +
                      ' days]',
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
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">
                      Start Date
                    </span>
                    <input
                      type="date"
                      name="start_date"
                      className="form-control"
                      value={this.state.start_date}
                      onChange={(e) => this.setStartDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">
                      End Date
                    </span>
                    <input
                      type="date"
                      name="end_date"
                      className="form-control"
                      value={this.state.end_date}
                      onChange={(e) => this.setEndDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
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
