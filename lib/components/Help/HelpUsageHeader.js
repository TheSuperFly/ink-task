import { h, Text } from 'ink'
import PropTypes from 'prop-types'

const HelpUsageHeader = ({ appName }) =>
  <div>
    <Text bold>Usage:</Text> {appName} [commands] [flags]
  </div>

HelpUsageHeader.propTypes = {
  appName: PropTypes.string,
}

HelpUsageHeader.defaultProps = {
  appName: '',
}

export default HelpUsageHeader
