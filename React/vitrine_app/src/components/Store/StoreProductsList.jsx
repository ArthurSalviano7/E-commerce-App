import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import StoreItem from './StoreItem';


export default function StoreProductsList({ storeProducts }) {
  return (
    <div className="w-100 border-right border-warning d-flex flex-column">
      {storeProducts.map((item) => (
            <StoreItem idProduto={item.id}/>
          ))}
    </div>
  );
};







