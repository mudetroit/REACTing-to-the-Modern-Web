var _ = require('lodash');
var React = require('react');
var SearchBar = require('./searchBar');
var ProductTable = require('./productTable');

module.exports  = React.createClass({
    getInitialState: function() {
        return {
            filterText: '',
            inStockOnly: false
        };
    },

    handleUserInput: function(filterText, inStockOnly) {
        this.setState({
            filterText: filterText,
            inStockOnly: inStockOnly
        });
    },

    render: function() {
      var self = this;
      var filteredProducts = _.where(this.props.products, function(product){
        return (!self.state.inStockOnly || product.stocked)
          && (!self.state.filterText || product.name.indexOf(self.state.filterText) > -1)
      });

        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onUserInput={this.handleUserInput}
                />
                <ProductTable
                    products={filteredProducts}
                />
            </div>
        );
    }
});
