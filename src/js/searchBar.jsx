var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
      <form>
          <input type="text" placeholder="Search..." />
          <p>
              <input id="inStock" type="checkbox" />
              <label htmlFor="inStock">Only show products in stock</label>
          </p>
      </form>
    );
  }
})
