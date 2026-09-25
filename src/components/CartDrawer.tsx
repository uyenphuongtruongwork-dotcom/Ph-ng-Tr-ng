import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, CheckCircle, Info } from 'lucide-react';
import { CartItem, Language } from '../types';
import { translations, currencyRates } from '../data/translations';
import { formatVND, formatCurrency } from '../data/products';
import { ProductVisualizer } from './ProductVisualizer';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
  currentLang: Language;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  currentLang,
}) => {
  const t = translations[currentLang];
  const [selectedCurrency, setSelectedCurrency] = useState<string>('VND');
  const [showCheckoutSuccess, setShowCheckoutSuccess] = useState(false);

  if (!isOpen) return null;

  const totalVnd = items.reduce((sum, item) => sum + item.totalPrice * item.quantity, 0);
  const currentRate = currencyRates[selectedCurrency] || currencyRates.VND;

  const handleCheckout = () => {
    setShowCheckoutSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col justify-between border-l border-[#E6DDCE]">
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#E6DDCE] flex items-center justify-between bg-[#F5EFE6]">
            <div>
              <h2 className="font-serif text-xl font-semibold text-[#1E293B]">
                {t.cart.title}
              </h2>
              <p className="text-xs text-[#6B635B] mt-0.5">
                {items.length} {t.shop.productsFound}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-[#786E64] hover:bg-[#EAE2D5] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Item List / Empty State */}
          <div className="flex-1 overflow-y-auto px-6 py-6 divide-y divide-[#EFE7DC]">
            {items.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#EFE9DF] flex items-center justify-center text-stone-400">
                  <Info className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-medium text-stone-800">
                  {t.cart.empty}
                </h3>
                <p className="text-xs text-stone-500 mt-2 max-w-xs mx-auto">
                  {t.cart.emptySubtitle}
                </p>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.cartItemId} className="py-5 flex gap-4">
                  {/* Visualizer Thumbnail */}
                  <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border border-[#E0D5C3] shadow-xs">
                    <ProductVisualizer
                      productId={item.productId}
                      options={item.customOptions}
                      sizeClass="w-full h-full"
                      showCaption={false}
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-semibold text-stone-900 leading-tight">
                          {item.productName}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.cartItemId)}
                          className="text-stone-400 hover:text-red-700 transition-colors p-1"
                          title={t.cart.remove}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Customization Summary */}
                      <p className="text-[11px] text-stone-600 mt-1 line-clamp-2">
                        {item.summaryText}
                      </p>

                      {/* Pricing Breakdown Formula */}
                      <div className="text-[11px] font-mono text-stone-500 mt-1.5 flex flex-wrap gap-x-2">
                        <span>Gốc: {formatVND(item.basePrice)}</span>
                        {item.addonsTotal > 0 && (
                          <span className="text-amber-800">
                            + Phụ phí: {formatVND(item.addonsTotal)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity & Unit Total */}
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#F2ECE3]">
                      <div className="flex items-center border border-[#D5C9B8] rounded-md bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="p-1 text-stone-600 hover:text-stone-900 disabled:opacity-30 cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono font-medium text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                          className="p-1 text-stone-600 hover:text-stone-900 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-sm font-bold text-[#8A3D2B] font-mono">
                          {formatVND(item.totalPrice * item.quantity)}
                        </div>
                        {selectedCurrency !== 'VND' && (
                          <div className="text-[10px] text-stone-500 font-mono">
                            ~ {formatCurrency(item.totalPrice * item.quantity, selectedCurrency, currentRate)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Action */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#E6DDCE] bg-[#F7F2E8] space-y-4">
              {/* Reference Currency Selector */}
              <div className="flex items-center justify-between text-xs pb-2 border-b border-[#E8DEC8]">
                <label className="text-stone-600 font-medium">
                  {t.cart.currencySelectorLabel}:
                </label>
                <div className="flex items-center gap-1">
                  {Object.keys(currencyRates).map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setSelectedCurrency(curr)}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                        selectedCurrency === curr
                          ? 'bg-[#8A3D2B] text-white font-semibold'
                          : 'bg-[#EDE5D7] text-stone-700 hover:bg-[#E2D8C6]'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subtotal Display */}
              <div>
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-medium text-stone-700">{t.cart.subtotal}:</span>
                  <div className="text-right">
                    <span className="font-mono text-xl font-bold text-[#8A3D2B]">
                      {formatVND(totalVnd)}
                    </span>
                    {selectedCurrency !== 'VND' && (
                      <div className="text-xs text-stone-600 font-mono">
                        ~ {formatCurrency(totalVnd, selectedCurrency, currentRate)} ({selectedCurrency})
                      </div>
                    )}
                  </div>
                </div>

                {/* Currency Disclaimer with explicit source */}
                <p className="text-[10px] text-stone-500 mt-2 leading-relaxed">
                  * {t.cart.currencyNote} ({currentRate.sourceNote})
                </p>
              </div>

              {/* Student Project Academic Notice */}
              <div className="p-2.5 rounded-md bg-amber-50/80 border border-amber-200/80 text-[11px] text-amber-900 leading-snug">
                🎓 <span className="font-semibold">Dự án học tập:</span> {t.cart.studentNotice}
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full py-3 px-4 bg-[#8A3D2B] hover:bg-[#723223] text-white rounded-lg font-medium text-sm transition-colors shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{t.cart.checkoutBtn}</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Demo Checkout Modal */}
      {showCheckoutSuccess && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs">
          <div className="bg-[#FAF7F2] max-w-md w-full rounded-xl p-6 shadow-2xl border border-[#E8DEC8] animate-in fade-in zoom-in-95">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-xl font-bold text-center text-stone-900">
              {t.cart.orderSuccessTitle}
            </h3>

            <p className="text-xs text-stone-600 text-center mt-2 leading-relaxed">
              {t.cart.orderSuccessDesc}
            </p>

            <div className="mt-4 p-3 rounded-lg bg-[#EFE8DD] text-xs font-mono text-stone-700 space-y-1">
              <div className="flex justify-between">
                <span>Số lượng tác phẩm:</span>
                <span className="font-bold">{items.reduce((s, i) => s + i.quantity, 0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tổng giá trị đơn mẫu:</span>
                <span className="font-bold text-[#8A3D2B]">{formatVND(totalVnd)}</span>
              </div>
              <div className="flex justify-between text-[11px] text-stone-500 pt-1 border-t border-[#DFD5C6]">
                <span>Tình trạng:</span>
                <span className="text-emerald-700 font-semibold">Đã ghi nhận trong phiên mô phỏng</span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  setShowCheckoutSuccess(false);
                  onClearCart();
                  onClose();
                }}
                className="w-full py-2.5 px-4 bg-[#8A3D2B] text-white rounded-lg text-xs font-semibold hover:bg-[#723223] transition-colors cursor-pointer"
              >
                {t.cart.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
