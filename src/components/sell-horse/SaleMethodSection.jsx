import { Tag, Gavel, Info } from "lucide-react";

export default function SaleMethodSection({ formik }) {
    return (
        <section className="bg-white rounded-[10px] md:rounded-[20px] p-4 md:p-4 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center text_color">
                    <Tag size={20} strokeWidth={2.5} />
                </div>
                <h2 className="text-[20px] font-[700] text-[#1e293b]">Sale Method</h2>
            </div>

            <div className="flex flex-col gap-8">
                {/* Method Toggle */}
                <div className="flex w-full gap-2 md:gap-4">
                    <button
                        type="button"
                        onClick={() => formik.setFieldValue("type", "Fixed")}
                        className={`flex flex-1 items-center justify-center gap-1.5 md:gap-2.5 py-3 md:py-4 px-2 md:px-4 rounded-[12px] md:rounded-[15px] border-2 transition-all ${formik.values.type === 'Fixed'
                            ? 'border_color bg-blue-50/5'
                            : 'border-gray-50 bg-gray-50/30 hover:border-gray-200'
                            }`}
                    >
                        <Tag size={16} className={formik.values.type === 'Fixed' ? 'text_color' : 'text-gray-400'} strokeWidth={2.5} />
                        <span className={`text-[10px] md:text-[13px] font-bold uppercase whitespace-nowrap ${formik.values.type === 'Fixed' ? 'text-[#1e293b]' : 'text-gray-400'
                            }`}>
                            Fixed Price
                        </span>
                    </button>
                    <button
                        type="button"
                        onClick={() => formik.setFieldValue("type", "Auction")}
                        className={`flex flex-1 items-center justify-center gap-1.5 md:gap-2.5 py-3 md:py-4 px-2 md:px-4 rounded-[12px] md:rounded-[15px] border-2 transition-all ${formik.values.type === 'Auction'
                            ? 'border_color bg-blue-50/5'
                            : 'border-gray-50 bg-gray-50/30 hover:border-gray-200'
                            }`}
                    >
                        <Gavel size={16} className={formik.values.type === 'Auction' ? 'text_color' : 'text-gray-400'} strokeWidth={2.5} />
                        <span className={`text-[10px] md:text-[13px] font-bold uppercase whitespace-nowrap ${formik.values.type === 'Auction' ? 'text-[#1e293b]' : 'text-gray-400'
                            }`}>
                            Auction
                        </span>
                    </button>
                </div>

                {formik.values.type === "Auction" && (
                    <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-top-4 duration-500">
                        {/* Auction Info Alert */}
                        <div className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100/50 flex gap-4">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                                <Info size={18} className="text_color" />
                            </div>
                            <p className="text-[11px] font-medium text-gray-500 leading-relaxed pt-1">
                                Auctions generate excitement. Set your limits below to start the bidding process.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b]">Starting Bid ($)</label>
                                </div>
                                <input
                                    type="number"
                                    name="starting_bid"
                                    value={formik.values.starting_bid}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="0.00"
                                    className={`w-full bg-gray-50/50 border rounded-[5px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all ${formik.touched.starting_bid && formik.errors.starting_bid ? 'border-red-500' : 'border-gray-100'}`}
                                />
                                {formik.touched.starting_bid && formik.errors.starting_bid && (
                                    <p className="text-[10px] md:text-[11px] font-medium text-red-500 ml-1">{formik.errors.starting_bid}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b]">Reserve Price ($)</label>
                                    <span className="text-[9px] font-bold text-gray-300 uppercase underline cursor-help">(Optional)</span>
                                </div>
                                <div className="relative">
                                    <input
                                        type="number"
                                        name="reserve_price"
                                        value={formik.values.reserve_price}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        placeholder="0.00"
                                        className={`w-full bg-gray-50/50 border rounded-[5px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all pr-12 ${formik.touched.reserve_price && formik.errors.reserve_price ? 'border-red-500' : 'border-gray-100'}`}
                                    />
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300 cursor-help">
                                        <Info size={14} />
                                    </div>
                                </div>
                                {formik.touched.reserve_price && formik.errors.reserve_price && (
                                    <p className="text-[10px] md:text-[11px] font-medium text-red-500 ml-1">{formik.errors.reserve_price}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Auction Duration</label>
                                <select
                                    name="auction_duration"
                                    value={formik.values.auction_duration}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`w-full bg-gray-50/50 border rounded-[5px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all appearance-none cursor-pointer ${formik.touched.auction_duration && formik.errors.auction_duration ? 'border-red-500' : 'border-gray-100'}`}
                                >
                                    <option value="7">7 Days</option>
                                    <option value="14">14 Days</option>
                                    <option value="30">30 Days</option>
                                </select>
                                {formik.touched.auction_duration && formik.errors.auction_duration && (
                                    <p className="text-[10px] md:text-[11px] font-medium text-red-500 ml-1">{formik.errors.auction_duration}</p>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b]">Buy It Now Price ($)</label>
                                    <span className="text-[9px] font-bold text-gray-300 uppercase underline cursor-help">(Optional)</span>
                                </div>
                                <input
                                    type="number"
                                    name="buy_it_now_price"
                                    value={formik.values.buy_it_now_price}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    placeholder="0.00"
                                    className={`w-full bg-gray-50/50 border rounded-[5px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all ${formik.touched.buy_it_now_price && formik.errors.buy_it_now_price ? 'border-red-500' : 'border-gray-100'}`}
                                />
                                {formik.touched.buy_it_now_price && formik.errors.buy_it_now_price && (
                                    <p className="text-[10px] md:text-[11px] font-medium text-red-500 ml-1">{formik.errors.buy_it_now_price}</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {formik.values.type === "Fixed" && (
                    <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
                        <div className="flex flex-col gap-2">
                            <label className="text-[12px] md:text-[14px] font-bold text-[#1e293b] ml-1">Asking Price ($)</label>
                            <input
                                type="number"
                                name="price"
                                value={formik.values.price}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="0.00"
                                className={`w-full bg-gray-50/50 border rounded-[5px] md:rounded-2xl px-4 py-2 md:py-3.5 text-[12px] font-medium text-[#1e293b] focus:outline-none focus:ring-2 focus:ring_color/20 focus:border_color transition-all ${formik.touched.price && formik.errors.price ? 'border-red-500' : 'border-gray-100'}`}
                            />
                            {formik.touched.price && formik.errors.price && (
                                <p className="text-[10px] md:text-[11px] font-medium text-red-500 ml-1">{formik.errors.price}</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
