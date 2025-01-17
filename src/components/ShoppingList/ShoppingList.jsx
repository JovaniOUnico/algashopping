import React from 'react'
import { Wrapper, Title, Array } from './ShoppingList.styles'
import Checkbox from '../../shared/Checkbox'
import { useSelector } from 'react-redux'
import { selectAllProducts, selectSelectedProducts } from '../../store/Products/Products.selector'
import { useEffect } from 'react'

function ShoppingList ({ title, products, onToggle,displayOnlySelected }) {

  const productsFromRedux = useSelector(displayOnlySelected  ? selectSelectedProducts : selectAllProducts)

  return <Wrapper>
    <Title>
      { title }:
    </Title>
    <Array>
      {
        productsFromRedux.map(product =>
          <Checkbox
            key={product.id}
            value={product.checked}
            title={product.name}
            onClick={() => onToggle(product.id, product.checked, product.name)}
          />
        )
      }
    </Array>
  </Wrapper>
}

export default ShoppingList
