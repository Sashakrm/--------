import ProductCounter from './ProductCounter';

function HeroMedia({ 
    image,
    productCount
 }) {
    return (
        <div>
            <img 
            src={image} 
            alt="Покупатель с товарами
            " />

            <ProductCounter 
            count={productCount} 
            />
        </div>
    );
}

export default HeroMedia;