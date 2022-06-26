import React from 'react';
import Header from './components/Header/Header';
import ShopCarousel from './components/ShopCarousel/ShopCarousel';
import './App.css';
import Card from './components/Card/Card';

function App() {
  const [data, setData] = React.useState([]);
  const carouselImgs = [];
  
  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              setData(json);
            })
  }, []);

  data.forEach((item) => {
    carouselImgs.push(item.image);
  });

  console.log(data)
  return (
    <div className="App">
      <Header />
      <ShopCarousel carouselImages={carouselImgs} />
      <div className="cards-container">
        {
        data.map(function(item){
          return <Card title={item.title} image={item.image} price={item.price} />
        })
        }
      </div>
    </div>
  );
}

export default App;
