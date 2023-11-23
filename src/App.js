
import './App.css';
import Products from './Component/Products';

function App() {
  return (
    <div className="Container">
    <h2>E-Commerce Redux Product</h2><hr/>
    <div className="row">
      <div class="col-md-8">
        <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart}/>
      </div>
    </div>
    </div>
  );
}

export default App;
