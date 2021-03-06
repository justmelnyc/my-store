/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text, TouchableOpacity } from 'react-native';

/* Redux */
import { connect } from 'react-redux';
import CategoriesActions from 'store/ducks/categories';
import CategoryProductsActions from 'store/ducks/categoryProducts';

import styles from './styles';

export class ItemCategory extends Component {
  static propTypes = {
    category: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }).isRequired,
    active: PropTypes.bool.isRequired,
    setActiveCategory: PropTypes.func.isRequired,
    categoryProductsRequest: PropTypes.func.isRequired,
  };

  setActiveCategory = (category) => {
    this.props.setActiveCategory(category);
    this.props.categoryProductsRequest(category);
  }

  render() {
    const { category: { id, title }, active } = this.props;
    const categoryActive = active ? styles['category-active'] : {};
    const titleActive = active ? styles['title-active'] : {};

    return (
      <View style={[styles.category, categoryActive]}>
        <TouchableOpacity
          onPress={() => this.setActiveCategory(id)}
          style={styles.button}
        >
          <Text
            className={active ? 'title-active' : ''}
            style={[styles.title, titleActive]}
          >
            {title.toUpperCase()}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setActiveCategory: category => dispatch(CategoriesActions.categoriesSetActiveCategory(category)),
  categoryProductsRequest: category =>
    dispatch(CategoryProductsActions.categoryProductsRequest(category)),
});


export default connect(null, mapDispatchToProps)(ItemCategory);
