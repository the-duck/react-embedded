
import Comp from './comps.js'

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Chart</h1>
        <p>100%;</p>
        <Comp />
      </div>
    )
  }
};
export default Index;

  ReactDOM.render(
    <Index />,
    document.querySelector("#embedded-component")
  );