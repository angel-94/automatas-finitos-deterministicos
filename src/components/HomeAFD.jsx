import React from 'react';
//import $ from 'jquery';
//import {Link} from 'react-router';

export default class HomeAFD extends React.Component{
  contructor(){
  }

  entradas_afd=()=>{
    //console.log('login..');
    //console.log('hola mundo putos');
    this.props.history.push('/afd');
  }

  render(){
    return (
      <div className="clearfix col-md-6">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Hola mundo</h3>
          </div>
            <div className="row">
              <div className="col-md-2">
                <input type='button' onClick={this.entradas_afd} value='Crea tu AFD' className="form-control btn btn-primary"/>
              </div>
            </div>
        </div>
      </div>
    );
  }
}
