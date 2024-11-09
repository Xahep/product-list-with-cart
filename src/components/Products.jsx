import React from 'react'
import AddToCart from '../assets/icon-add-to-cart.svg'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, decrementQuantity, incrementQuantity } from '../features/cart/CartSlice';

const Products = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }

    const handleIncrementItem = (product) => {
        dispatch(incrementQuantity(product));
    }

    const handleDecrementItem = (product) => {
        dispatch(decrementQuantity(product));
    }

    return (
        <>
            <div id="products" className='md:mr-6'>
                <h1 className='text-rose-900 text-2xl font-bold mb-5'>Desserts</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {cart.map((product, index) => (
                        <div className='flex flex-col space-y-3 md:max-w-52' key={index}>
                            <div className='relative h-58 md:h-52 flex flex-row justify-center'>
                                <picture>
                                    <source media="(min-width: 768px)" srcSet={product.image.desktop} />
                                    <img src={product.image.mobile} alt={product.name} className={`${product.quantity === 0 ? '' : 'border-2 border-red'} h-52 w-96 md:w-48 md:h-48 rounded-lg`} />
                                </picture>
                                <button onClick={() => handleAddToCart(product)} className='absolute bottom-0 w-44 md:w-32 rounded-full p-3 md:p-2 bg-white border border-rose-400 hover:border-red text-sm md:text-xs text-rose-900 hover:text-red font-semibold flex flex-row items-center justify-center'>
                                    <img src={AddToCart} alt="Cart icon" className='mr-3 md:mr-1 h-5 md:h-4 w-5 md:w-4' />
                                    Add to Cart
                                </button>
                                <div className={`${product.quantity === 0 ? 'hidden' : ''} absolute bottom-0 w-44 md:w-32 rounded-full p-3 md:p-2 bg-red border border-red text-sm md:text-xs text-white font-semibold flex flex-row items-center justify-between`}>
                                    <button onClick={() => handleDecrementItem(product)} className='rounded-full border text-white border-white p-1 md:p-0 hover:bg-white hover:text-red'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2" className="h-2 w-2"><path fill="currentColor" d="M0 .375h10v1.25H0V.375Z" /></svg>
                                    </button>
                                    {product.quantity}
                                    <button onClick={() => handleIncrementItem(product)} className='rounded-full border border-white p-1 md:p-0 hover:bg-white hover:text-red'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10" className="h-2 w-2"><path fill="currentColor" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" /></svg>
                                    </button>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-sm md:text-xs text-rose-400'>{product.category}</h3>
                                <h2 className='text-lg md:text-sm text-rose-900 font-semibold'>{product.name}</h2>
                                <p className='text-lg md:text-sm text-red'>{`$${product.price.toFixed(2)}`}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Products