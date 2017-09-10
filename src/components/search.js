import React, { Component } from 'react'

export default class Search extends Component {
  render () {
    return (
      <div>
      {/* // <!-- This row will handle all of the retrieved articles --> */}
      <div className="row">
        <div className="col-sm-12">
          <br />
  
          {/* <!-- This panel will initially be made up of a panel and wells for each of the articles retrieved --> */}
          <div className="panel panel-primary">
  
            {/* <!-- Panel Heading for the retrieved articles box --> */}
            <div className="panel-heading">
              <h3 className="panel-title"><strong><i className="fa fa-table"></i>   Top Articles</strong></h3>
            </div>
  
            {/* <!-- This main panel will hold each of the resulting articles --> */}
            <div className="panel-body" id="well-section">
            </div>
          </div>
        </div>
      </div>
  
      {/* <!-- Footer Region --> */}
      <div className="row">
        <div className="col-sm-12">
  
          {/* <!-- Line Break followed by closing --> */}
          <hr />
          <h5 className="text-center"><small>Made by Ahmed with lots and lots of <i className="fa fa-heart" /></small></h5>
        </div>
      </div>
  
    </div>
    );
  }
}

