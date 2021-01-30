import React, { Component } from 'react'
import { fetchData } from "./api/index"
import axios from "axios";
import Country from "./components/countrypicker/Country";
import CardDetails from "./components/Card/CardDetails";
import CardClass from './components/Card/CardClass';
export default class App extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    data: [],
    country: ""

  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });


  }
  handleCountryChange = async (country) => {
    //fetch data
    const response = await fetchData(country);
    console.log(response);

    this.setState({ data: response, country: country });
  };
  render() {
    const { data } = this.state;
    console.log(data);
    // console.log(data.data);
    return (
      <div className="container">
        <h3>World Timer</h3>
        <div style={{ paddingBottom: "10px" }}>
          <h6>Select Country</h6>
          <Country handleCountryChange={this.handleCountryChange} />
        </div>

        <CardDetails data={data} />
        <CardClass data={data} />
      </div>
    )
  }
}
