import React from 'react';
// import styled from 'styled-components'


const Product = ({ data, brand, add }) => {

  const product = data.filter(prod => {
    return prod.brand === brand
  })

  return product.map(product => (
    <div className="card" >
      <h5 className="card-header">{product.nameOfProduct}</h5>
      <img className="card-img" src={product.image} alt={product.nameOfProduct} />
      <div className="card-body">
        <h6>{product.brand}</h6>   
        <h5 >S/. {product.price}</h5>
      </div>
      <div className="card-footer">
        <button key={product._id} onClick={() => { add(product._id) }} className="btn btn-dark btn-lg">Agregar</button>  
      </div>  
    </div>
  ))
};

export default Product;


// const SectionCard = styled.div`
//   width:350px;
//   margin:30px;
//   box-shadow: 0 0 88px 0 rgba(0, 0, 0, 0.1607843137254902);
// `;

// const Image = styled.div`
//   width:250px;
//   padding-top:20px;
//   text-align:center;
// `; 

// const Immg = styled.img`
// width:250px;
// padding-top:20px;
// `; 
// const MatProduct = styled.div`
//   background-color:#ffffff;
//   padding-top:5px;
//   padding-bottom:10px;
//   padding-left:35px;
// `;

// const Section = styled.div`

// display: flex`;


// const CardProduct = ({data, brand, add}) => {
//   const product = data.filter(prod => {
//     return prod.brand === brand
//   })



//   return product.map(product => (
//     <div>
//     <SectionCard >
//        <Image>
//          <Immg src={product.image} alt={product.nameOfProduct}/>         
//        </Image>
//        <MatProduct class="mat">
//          <h3>{product.brand}<span class="price">S/. {product.price}</span></h3>
//          <p>{product.nameOfProduct}</p>
//          <h4>Colors</h4>
//          <div class="color-group">
//            <div class="cricle one"></div>
//            <div class="cricle two"></div>
//            <div class="cricle three"></div>
//            <div class="cricle four"></div>
//          </div>
//          <div className="card-footer">
//           <button key={product._id} onClick={() => { add(product._id) }} className="btn btn-dark btn-lg">Agregar</button>  
//         </div>
//        </MatProduct>
//    </SectionCard>
//    </div>
  
//   ));
// };

// export default CardProduct;
