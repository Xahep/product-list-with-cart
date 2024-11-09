import React, { useEffect, useRef, useState } from 'react'
import EmptyCart from '../assets/illustration-empty-cart.svg'
import CarbonNeutral from '../assets/icon-carbon-neutral.svg'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../features/cart/CartSlice';
import ConfirmOrder from './ConfirmOrder';
import IconCart from '../assets/icon-add-to-cart.svg'
import './Cart.css'

const Cart = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenCartMobile, setIsOpenCartMobile] = useState(false);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    const quantity = () => {
        const itemsInCart = cart.filter(item => item.quantity !== 0);
        let quantityTotal = 0;
        for (const item of itemsInCart) {
            quantityTotal += item.quantity;
        }
        return quantityTotal;
    };

    const totalCost = () => {
        const itemsInCart = cart.filter(item => item.quantity !== 0);
        let totalCost = 0;
        for (const item of itemsInCart) {
            totalCost += (item.price * item.quantity);
        }
        return totalCost.toFixed(2);
    }

    const handleRemoveItem = (product) => {
        dispatch(removeFromCart(product));
    }

    const openModal = () => {
        if (quantity() > 0) {
            setIsOpen(true);
            setIsOpenCartMobile(false);
        } else {
            setIsOpenCartMobile(false);
        }
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else if (isOpenCartMobile) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        // Función de limpieza, se ejecuta justo antes de ejecutar lo de arriba. Tenemos mejor seguridad
        return () => document.body.classList.remove('overflow-hidden');
    }, [isOpen, isOpenCartMobile]);


    const openCartMobileModal = () => {
        if (quantity() > 0) setIsOpenCartMobile(true);
    }
    const closeCartMobileModal = () => setIsOpenCartMobile(false);

    return (
        <>

            <button onClick={openCartMobileModal} className='block md:hidden fixed bottom-3 right-3 w-16 h-16 flex justify-center items-center bg-rose-300 rounded-full'>
                <img src={IconCart} alt="Icon cart" className='w-6 h-6' />
                <div className='w-5 h-5 bg-red absolute left-0 top-0 rounded-full flex justify-center items-center'>
                    <p className='text-white text-xs'>{quantity()}</p>
                </div>
            </button>

            <div id='card-cart' className='hidden md:block'>
                <div className='bg-white rounded-lg w-72 lg:w-80 px-5 pt-3 sticky top-5'>
                    <h3 className='text-red text-lg font-bold'>Your Cart ({quantity()})</h3>
                    <div id='empty-cart' className={`${quantity() > 0 ? 'hidden' : ''} flex flex-col justify-center items-center mt-5 space-y-4 pb-9`}>
                        <img src={EmptyCart} alt="Empty Cart" className='w-28 h-28' />
                        <p className='text-xs font-semibold text-rose-400'>Your added items will appear here</p>
                    </div>
                    <div className={`${quantity() > 0 ? '' : 'hidden'} py-5 space-y-5`}>
                        <div id='cart-items' className='space-y-4 max-h-72 lg:max-h-96 overflow-y-auto'>
                            {cart.filter(item => item.quantity !== 0).map((product, index) => (
                                <div className='flex flex-row items-center justify-between border-b-2 pb-3' key={index}>
                                    <div className='flex flex-col space-y-2'>
                                        <p className='text-xs text-rose-900 font-semibold'>{product.name}</p>
                                        <div className='flex flex-row'>
                                            <p className='text-red text-xs font-semibold mr-4'>{product.quantity}x</p>
                                            <p className='text-rose-400 text-xs mr-2'>@ ${product.price.toFixed(2)}</p>
                                            <p className='text-rose-400 text-xs font-semibold'>${(product.quantity * product.price).toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => handleRemoveItem(product)} className='rounded-full border text-rose-400 border-rose-400 p-0 hover:border-rose-900 hover:text-rose-900 mr-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="currentColor" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div id="total" className='flex flex-row items-center justify-between'>
                            <p className='text-rose-400 text-xs'>Order Total</p>
                            <p className='text-rose-900 font-bold text-lg'>${totalCost()}</p>
                        </div>
                        <div className='bg-rose-50 rounded-lg text-xs py-3 flex flex-row justify-center items-center space-x-2'>
                            <img src={CarbonNeutral} alt="Carbon Neutral" />
                            <p className='text-rose-900'>This is a <span className='font-bold'>carbon-neutral</span> delivery</p>
                        </div>
                        <button onClick={openModal} className='bg-red rounded-full w-full text-white text-xs py-3 hover:bg-rose-800'>Confirm Order</button>
                    </div>
                </div>
            </div>

            {
                isOpenCartMobile && <div className='fixed inset-0 bg-black bg-opacity-40 z-10 flex justify-center items-end'>
                    <div className='bg-white w-full py-5 space-y-5 p-8 rounded-t-xl'>
                        <div className='w-full flex flex-row justify-end'>
                            <button onClick={closeCartMobileModal} className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <h3 className='text-red text-xl font-bold'>Your Cart ({quantity()})</h3>
                        <div id='cart-items' className='space-y-4 max-h-72 lg:max-h-96 overflow-y-auto'>
                            {cart.filter(item => item.quantity !== 0).map((product, index) => (
                                <div className='flex flex-row items-center justify-between border-b-2 pb-3' key={index}>
                                    <div className='flex flex-col space-y-2'>
                                        <p className='text-base text-rose-900 font-semibold'>{product.name}</p>
                                        <div className='flex flex-row'>
                                            <p className='text-red text-xs font-semibold mr-4'>{product.quantity}x</p>
                                            <p className='text-rose-400 text-xs mr-2'>@ ${product.price.toFixed(2)}</p>
                                            <p className='text-rose-400 text-xs font-semibold'>${(product.quantity * product.price).toFixed(2)}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => handleRemoveItem(product)} className='rounded-full border text-rose-400 border-rose-400 p-1 hover:border-rose-900 hover:text-rose-900 mr-2'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="currentColor" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div id="total" className='flex flex-row items-center justify-between'>
                            <p className='text-rose-400 text-sm'>Order Total</p>
                            <p className='text-rose-900 font-bold text-xl'>${totalCost()}</p>
                        </div>
                        <div className='bg-rose-50 rounded-lg text-sm py-3 flex flex-row justify-center items-center space-x-2'>
                            <img src={CarbonNeutral} alt="Carbon Neutral" />
                            <p className='text-rose-900'>This is a <span className='font-bold'>carbon-neutral</span> delivery</p>
                        </div>
                        <button onClick={openModal} className='bg-red rounded-full w-full text-white text-base py-3 hover:bg-rose-800'>Confirm Order</button>
                    </div>
                </div>
            }


            {isOpen && <ConfirmOrder onClose={closeModal} total={totalCost} />}
        </>
    )
}

export default Cart