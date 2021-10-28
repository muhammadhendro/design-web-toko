import PropTypes from 'prop-types';

import './App.css';
import ReviewItems from './Reviews';

function App() {


  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiskon="yes"  category="SNEAKER" name="Casual Sport" />
    <ReviewItems />

      
    </div>
  );
}



function FotoProduk() {
  return (
      <div className="Foto">
          <img src="sneakers.jpg" alt="sneakers" />
      </div>
      
    
  );
}

function CekDiskon(props) {
  const {isDiskon, diskon} = props;
  if(isDiskon === 'yes'){
    return(
      <p>Diskon {diskon}% Off</p>
    );
  } else {
    return (
      <p>Belum ada diskon...</p>
    );
  }
}

function ProdukInfo(props) {
  const { category, name , isDiskon} = props;
  const benefits = ["Bahan Lebih halus", "Cocok untuk segala busana", "Bisa digunakan acara Formal dan non-Formal"];
  const listBenefits = benefits.map((benefit) =>
    <li key={benefit} >{benefit}</li>
  );
  
  const price = 74000000;
  return (
    <div >
      <div className="Deskripsi">
          <p className="Cate">{category}</p>
          <h1 className="Title ">{name}</h1>
          <p className="Price">IDR {price}</p>
          <CekDiskon isDiskon={isDiskon} diskon={50} />
          <p className="Info">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, .
          </p>
        <ul>
          {listBenefits}
        </ul>

          <a onClick={(e) => TambahCart(name, e)} href="#">Add to Cart</a>
      </div>
    </div>
  );

}


function TambahCart(e){
 return console.log("membeli produk " + e);
}

CekDiskon.propTypes = {
  diskon: PropTypes.number.isRequired
};

export default App;
