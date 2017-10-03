import { h, Component } from 'ink'
import parseArgs from 'minimist'
import PropTypes from 'prop-types'

import store from '../store'

class Task extends Component {
  constructor(props, context) {
    super(props, context)

    const args = this.getArgs()

    this.matchedTerm = this.getMatchedTerm(args._)
    this.flags = this.getFlags(args)

    if (this.props.isHelp) {
      this.helpData = store.helpData
    } else {
      this.sendHelpDataToStore()
    }
  }

  getArgs() {
    return parseArgs(process.argv.slice(2), {
      default: this.props.defaultFlags,
    })
  }

  getMatchedTerm(userArgs) {
    const matchingArgs = [].concat(this.props.match)

    if (matchingArgs.includes('*')) return '*'

    const termMatched = matchingArgs.filter(arg => userArgs.includes(arg))

    if (termMatched.length === 0) {
      return false
    }

    return termMatched
  }

  getFlags(userArgs) {
    // eslint-disable-next-line no-unused-vars
    const { _, ...flags } = userArgs

    return flags
  }

  sendHelpDataToStore() {
    const { match, defaultFlags } = this.props

    store.collectHelpData(match, defaultFlags)
  }

  notifyHasMatchedToStore() {
    const matchedTerm = this.matchedTerm

    store.hasMatched(matchedTerm)
  }

  render({ component }) {
    const ComponentToRender = component

    if (this.matchedTerm && store.shouldRenderTask) {
      this.notifyHasMatchedToStore()

      return <ComponentToRender flags={this.flags} helpData={this.helpData} />
    }

    return false;
  }
}

Task.propTypes = {
  match: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]).isRequired,
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.bool,
  ]).isRequired,
  defaultFlags: PropTypes.objectOf(PropTypes.string),
  isHelp: PropTypes.bool,
}

Task.defaultProps = {
  defaultFlags: {},
  isHelp: false,
}

export default Task
