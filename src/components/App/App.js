import React, { Component } from 'react';
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
  state = {
    frameworks: data.frameworks,
    visible: new Collection(config.defaultSelected),
    menuOpened: false
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

      // finally, update
      this.setState(visible);
    }
  };

  onNavToggle = e => {
    this.setState({
      menuOpened: !this.state.menuOpened
    });

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
