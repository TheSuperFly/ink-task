import { h, Component } from 'ink'
import store from '../store'

class Switch extends Component {
  constructor(props, context) {
    super(props, context)

    store.onNewSwitch();
  }

  render({ children }) {
    return children;
  }
}

export default Switch
