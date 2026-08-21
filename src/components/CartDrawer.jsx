import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag } from 'lucide-react';
import { JerseyGraphic } from './JerseyGraphic';

export const CartDrawer = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => {
    const numericPrice = parseInt(item.price.replace(/[^\d]/g, ''), 10) || 0;
    return acc + numericPrice * item.quantity;
  }, 0);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const discountEligible = totalItems >= 2;
  const discount = discountEligible ? 100 : 0;
  const finalTotal = Math.max(0, subtotal - discount);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F3] text-[#0A192F] shadow-2xl flex flex-col justify-between border-l border-[#E3DDD0]">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#E3DDD0] px-6 py-4 bg-[#0A192F] text-white">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-5 w-5 text-[#D4AF37]" />
              <h2 className="font-bebas text-xl font-bold uppercase tracking-wider">
                YOUR CART ({totalItems})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-gray-300 hover:text-white hover:bg-white/10"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Offer Banner inside Cart */}
          <div className="bg-[#0D1F38] text-white px-4 py-2.5 text-xs flex items-center justify-between border-b border-[#E3DDD0]/20">
            <div className="flex items-center space-x-2">
              <Tag className="h-4 w-4 text-[#D4AF37]" />
              <span>Buy 2+ Jerseys to get <strong>₹100 OFF</strong></span>
            </div>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${discountEligible ? 'bg-emerald-600 text-white' : 'bg-white/20 text-gray-300'}`}>
              {discountEligible ? 'UNLOCKED 🎉' : `${2 - totalItems} MORE`}
            </span>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-center space-y-3">
                <ShoppingBag className="h-16 w-16 text-gray-300 stroke-[1]" />
                <p className="font-bebas text-xl font-bold text-gray-500">YOUR CART IS EMPTY</p>
                <button
                  onClick={onClose}
                  className="rounded bg-[#0A192F] px-6 py-2 font-bebas text-xs text-white uppercase tracking-wider"
                >
                  START SHOPPING
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 rounded-xl border border-[#E3DDD0] bg-white p-3 shadow-sm"
                >
                  {/* Jersey Graphic Thumbnail */}
                  <div className="h-20 w-16 flex-shrink-0 flex items-center justify-center bg-[#F6F4EE] rounded-lg p-1">
                    <JerseyGraphic type={item.graphicType} className="h-full w-full object-contain" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <h3 className="font-sans text-xs font-bold text-[#0A192F] truncate">
                      {item.title}
                    </h3>
                    <p className="font-bebas text-sm font-bold text-[#0A192F]">
                      {item.price}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center space-x-2 pt-1">
                      <div className="flex items-center border border-[#E3DDD0] rounded bg-[#FAF8F3]">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-[#0A192F] hover:text-white transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-2 font-mono text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-[#0A192F] hover:text-white transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary */}
          {cartItems.length > 0 && (
            <div className="border-t border-[#E3DDD0] bg-white p-6 space-y-3">
              <div className="flex justify-between text-xs font-semibold text-gray-600">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              
              {discount > 0 && (
                <div className="flex justify-between text-xs font-bold text-emerald-700">
                  <span>Promo Discount (2+ Jerseys)</span>
                  <span>-₹{discount}</span>
                </div>
              )}

              <div className="flex justify-between text-base font-extrabold text-[#0A192F] border-t border-[#E3DDD0] pt-2">
                <span>Total</span>
                <span>₹{finalTotal}</span>
              </div>

              <button className="w-full flex items-center justify-center space-x-2 rounded-lg bg-[#0A192F] py-3.5 font-bebas text-sm font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#11253E] transition-all">
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
