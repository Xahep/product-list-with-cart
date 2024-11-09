import React from 'react'
import OrderConfirmed from '../assets/icon-order-confirmed.svg'
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart } from '../features/cart/CartSlice';
import './ConfirmOrder.css'

const ConfirmOrder = ({ onClose, total }) => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleStartNewOrder = () => {
        dispatch(emptyCart());
        onClose();
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-40 z-10 flex justify-center items-end md:items-center'>
            <div className='bg-white w-full md:w-auto rounded-t-xl md:rounded-lg p-6'>
                <img src={OrderConfirmed} alt="Order Confirmed" className='w-9 h-9 mb-5' />
                <h4 className='text-rose-900 text-2xl font-bold mb-2'>Order Confirmed</h4>
                <p className='text-xs text-rose-400 mb-7 font-semibold'>We hope you enjoy your food!</p>
                <div className='bg-rose-50 md:w-96 rounded-md pl-5 pr-2 py-5 mb-5'>
                    <div id='confirm-order-items' className='max-h-72 lg:max-h-80 overflow-y-auto pr-3'>
                        {cart.filter(item => item.quantity !== 0).map((product, index) => (
                            <div className='flex flex-row justify-between items-center border-b-2 pb-4 mb-4' key={index}>
                                <div className='flex flex-row justify-center items-center space-x-4'>
                                    <img src={product.image.thumbnail} alt={product.name} className='rounded-md w-10 h-10' />
                                    <div className='flex flex-col space-y-2'>
                                        <p className='text-xs text-rose-900 font-semibold'>{product.name}</p>
                                        <div className='flex flex-row'>
                                            <p className='text-red text-xs font-semibold mr-3'>{product.quantity}x</p>
                                            <p className='text-rose-400 text-xs mr-2'>@ ${product.price.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-rose-900 text-xs font-semibold'>${(product.quantity * product.price).toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-row justify-between items-center pr-3 mt-4'>
                        <p className='text-rose-500 text-xs'>Order Total</p>
                        <p className='text-rose-900 text-lg font-bold'>${total()}</p>
                    </div>
                </div>

                <button onClick={handleStartNewOrder} className='bg-red rounded-full w-full text-white text-base md:text-xs py-3 hover:bg-rose-800'>Start New order</button>
            </div>
        </div>
    )
}

export default ConfirmOrder