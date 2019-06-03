import React, { PropTypes } from "react";
import { Text } from "react-native";
import { injectIntl, intlShape, FormattedRelative } from "react-intl";

const Component = ({ date, intl }) => (
  <Text title={intl.formatDate(date)}>
    <FormattedRelative value={date} />
  </Text>
);

Component.propTypes = {
  date: PropTypes.any.isRequired,
  intl: intlShape.isRequired
};
Component.contextTypes = {
  intl: PropTypes.object.isRequired
};
export default injectIntl(Component);
