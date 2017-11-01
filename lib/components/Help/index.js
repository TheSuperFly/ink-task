import { h, Component } from 'ink'
import PropTypes from 'prop-types'
import path from 'path'

import HelpCommandLine from './HelpCommandLine'
import HelpUsageHeader from './HelpUsageHeader'

class Help extends Component {
  constructor(props, context) {
    super(props, context)

    this.appName = this.getAppName()
  }

  componentDidMount() {
    process.exit(0)
  }

  getAppName() {
    return path.basename(process.argv[1], '.js')
  }

  renderHelpCommandLines = () =>
    this.props.helpData.map((data, key) =>
      <HelpCommandLine
        appName={this.appName}
        commands={data.args}
        key={`HelpCommandLine__${key}`}
      />,
    )

  render() {
    return (
      <div>
        <HelpUsageHeader appName={this.appName} />
        <br />
        {this.renderHelpCommandLines()}
      </div>
    )
  }
}

Help.propTypes = {
  helpData: PropTypes.arrayOf(
    PropTypes.shape({
      args: PropTypes.arrayOf(PropTypes.string),
      flags: PropTypes.objectOf(PropTypes.string),
    }),
  ),
}

Help.defaultProps = {
  helpData: [{
    args: [''],
    flags: [''],
  }],
}

export default Help
