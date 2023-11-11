import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { IconSteam } from '../Icons';
import { ButtonsDiv } from './Styled';
import config from '../../config';

const Buttons = ({ user, strings }) => (
  <ButtonsDiv>
    {
      !user &&
      <div>
        <FlatButton
          label={<span className="label"><b>{strings.home_login}</b> {strings.home_login_desc}</span>}
          icon={<IconSteam />}
          href={`${config.VITE_API_HOST}/login`}
        />
      </div>
    }
    <div className="bottomButtons">
      <div>
        <FlatButton
          label={<span className="label"><b>{strings.home_parse}</b> {strings.home_parse_desc}</span>}
          containerElement={<Link to="/request">{strings.home_parse}</Link>}
        />
      </div>
    </div>
  </ButtonsDiv>
);

Buttons.propTypes = {
  user: PropTypes.shape({}),
  strings: PropTypes.shape({}),
};

const mapStateToProps = (state) => {
  const { data } = state.app.metadata;
  return {
    user: data.user,
    strings: state.app.strings,
  };
};

export default connect(mapStateToProps, null)(Buttons);
