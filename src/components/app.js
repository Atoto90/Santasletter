import React, { Component } from 'react';
import SantasForm from './santas_form';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="backgroundSkew">
          <div className="santas-heading">
            <h1>Santa's Letter</h1>
            <div className="santas-subheading">
              Fill out the fields below and click the generate button<br/>to see Santa's Letter
            </div>
          </div>
          <SantasForm/>
        </div>
      </div>
    );
  }
}
