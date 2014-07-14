var React = require('react');
var SearchBar = require('./searchBar');
var ProductTable = require('./productTable');

module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
});
