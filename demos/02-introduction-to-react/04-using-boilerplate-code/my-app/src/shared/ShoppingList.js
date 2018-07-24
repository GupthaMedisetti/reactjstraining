import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class ShoppingList extends React.Component {
    render() {
        let { title, items, couponCodeOrDiscount, onClick } = this.props;
        return (
            <div>
                <h3>{title}</h3>
                <ul>
                {
                    items.map(item => <li onClick={onClick.bind(null, item.name, item.quantity)}>{item.name} - {item.quantity}</li>)
                }
                </ul>
                Discount code or percentage : <strong>{couponCodeOrDiscount}</strong>
            </div>
        );
    }
}

ShoppingList.defaultProps = {
    title: 'Things to buy at Big Bazaar',
    couponCodeOrDiscount: 'NEW30',
    itemClickHandler: function() {}
};

ShoppingList.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        quantity: PropTypes.number
    })),
    couponCodeOrDiscount: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    itemClickHandler: PropTypes.func
};