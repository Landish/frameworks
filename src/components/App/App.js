import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import Header from '../Header';
import Navbar from '../Navbar/Navbar';
import Chooser from '../Chooser';
import FrameworksList from '../FrameworksList';
import Footer from '../Footer';
import ComponentsList from '../ComponentsList';
import Collection from '../../core/Collection';
import data from '../../data/index';
import config from '../../config';

class App extends Component {
  constructor(props) {
    super(props);
    this.history = createHistory();
    this.state = {
      frameworks: data.frameworks,
      visible: new Collection(config.defaultSelected),
      menuOpened: false
    };
  }

  componentWillMount() {
    this.setStateFromUrlParams();

    this.history.listen(({ state }) => {
      this.setState({
        visible: new Collection(state.frameworks)
      });
    });
  }

  setStateFromUrlParams = () => {
    const { search } = this.history.location;
    if (search && search.indexOf('?compare=') > -1) {
      let frameworks = search.replace('?compare=', '').split(',');
      frameworks = !frameworks[0].length ? config.defaultSelected : frameworks;
      this.setState({
        visible: new Collection(frameworks)
      });
    }
  };

  onFrameworkSelect = framework => {
    const { visible } = this.state;
    const { minimum, maximum } = config;

    // if in range between `minimum` and `maximum`
    if (visible.size() >= minimum && visible.size() <= maximum) {
      if (visible.has(framework) && visible.size() > minimum) {
        visible.remove(framework);
      } else if (!visible.has(framework) && visible.size() < maximum) {
        visible.add(framework);
      } else {
        if (visible.size() > minimum) {
          visible.removeFirst();
        }
        visible.add(framework);
      }

      this.history.push(`./?compare=${visible.all().join(',')}`, { frameworks: visible.all() });
    }
  };

  onNavToggle = e => {
    this.setState(prevState => ({
      menuOpened: !prevState.menuOpened
    }));
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Header>
          <Navbar onNavToggle={this.onNavToggle} isMenuOpened={this.state.menuOpened} />
        </Header>
        <Chooser
          minimum={config.minimum}
          maximum={config.maximum}
          onFrameworkSelect={this.onFrameworkSelect}
          frameworks={this.state.frameworks}
          visible={this.state.visible}
        />
        <FrameworksList frameworks={this.state.frameworks} visible={this.state.visible} />
        <ComponentsList
          frameworks={this.state.frameworks}
          visible={this.state.visible}
          components={data.components}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
