import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

const sendPageView = (location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
};

const GAListener = ({ children, trackingId, history }) => {
  useEffect(() => {
    ReactGA.initialize(trackingId);
    sendPageView(history.location);
    return history.listen(sendPageView);
  }, [history, trackingId]);

  return children;
};

GAListener.propTypes = {
  children: PropTypes.node,
  trackingId: PropTypes.string,
  history: PropTypes.shape({
    listen: PropTypes.func,
  }),
};

export default withRouter(GAListener);
