import React, { Component } from 'react';
import Header from './components/Header';
import Chooser from './components/Chooser';
import FrameworksList from './components/FrameworksList';
import Footer from './components/Footer';
import ComponentsList from './components/ComponentsList';
import Collection from './core/Collection';
import data from './data/index';

class App extends Component {
  state = {
    frameworks: data.frameworks,
    visible: new Collection(['bootstrap-3', 'bulma', 'semantic-ui', 'ink']),
    menuOpened: false
  };

  onFrameworkSelect = framework => {
    let visible = this.state.visible;

    if (visible.size() >= 2 && visible.size() < 5) {
      // if can remove
      if (visible.has(framework) && visible.size() > 2) {
        visible.remove(framework);
      } else if (!visible.has(framework) && visible.size() < 4) {
        // if can add
        visible.add(framework);
      } else {
        if (visible.size() > 2) {
          visible.removeFirst();
        }
        visible.add(framework);
      }

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
        <Header
          onNavToggle={this.onNavToggle}
          isMenuOpened={this.state.menuOpened}
        />
        <Chooser
          onFrameworkSelect={this.onFrameworkSelect}
          frameworks={this.state.frameworks}
          visible={this.state.visible}
        />
        <FrameworksList
          frameworks={this.state.frameworks}
          visible={this.state.visible}
        />
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
