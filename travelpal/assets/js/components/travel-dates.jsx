import React from 'react';
import { connect } from 'react-redux';

import api from '../api';

// Renders the user's travel dates
function TravelDates(props) {

  return (
    <div className="page-content">
      Travel Dates
    </div>
  );
};

function state2props(state) {
  return {

  };
}

export default connect(state2props)(TravelDates);