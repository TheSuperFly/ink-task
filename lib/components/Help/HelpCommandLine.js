import { h } from 'ink'
import PropTypes from 'prop-types'

const HelpCommandLine = ({ appName, commands }) => {
  const aliases = commands.slice(1)
  let aliasString = false

  if (aliases.length > 0) {
    aliasString = `(alias: ${aliases.join(', ')})`
  }

  return (
    <div>
      - {appName} {commands[0]} {aliasString}
    </div>
  )
}

HelpCommandLine.propTypes = {
  appName: PropTypes.string,
  commands: PropTypes.arrayOf(PropTypes.string),
}

HelpCommandLine.defaultProps = {
  appName: '',
  commands: [],
}

export default HelpCommandLine
