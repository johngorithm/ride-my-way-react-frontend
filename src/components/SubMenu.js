import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


class SubMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="submenu row">
          {/**<!--SUBMENU BAR STARTS-->**/}
          <Link
            to="/home"
            className="link active co-xl-6 co-lg-6 co-md-6 co-sm-6 co-xs-6 center-text border"
          >
            RIDE OFFERS
        </Link>
          <Link
            to="/requests"
            className="co-xl-6 co-lg-6 co-md-6 co-sm-6 co-xs-6 center-text"
          >
            MY REQUESTS
        </Link>
        </div>
      </Fragment>
    );
  }
}



export default SubMenu;
