export function TableHeader() {
  return (
    <div className="hidden md:block bg-gradient-to-r from-gray-900 to-black text-white rounded-xl overflow-hidden mb-4 shadow-lg border border-gray-700">
      {/* Header Row - FLEXBOX З РІВНИМИ ПРОМІЖКАМИ */}
      <div className="h-[24px] flex items-center px-6 bg-gradient-to-r from-brand-600 to-brand-700">
        {/* RANK - 6% */}
        <div className="flex-[0_0_6%] text-left pr-2">
          <span className="text-xs font-bold">#</span>
        </div>

        {/* BOOKMAKER - 19% */}
        <div className="flex-[0_0_19%] text-center pr-2">
          <span className="text-xs font-bold">BOOKMAKER</span>
        </div>

        {/* BONUS OFFER - 25% */}
        <div className="flex-[0_0_25%] text-center px-2">
          <span className="text-xs font-bold">BONUS OFFER</span>
        </div>

        {/* USER RATING - 20% */}
        <div className="flex-[0_0_20%] text-center px-2">
          <span className="text-xs font-bold">USER RATING</span>
        </div>

        {/* SCORE - 15% */}
        <div className="flex-[0_0_15%] text-center px-2">
          <span className="text-xs font-bold">SCORE</span>
        </div>

        {/* VISIT SITE - 15% */}
        <div className="flex-[0_0_15%] text-center pl-2">
          <span className="text-xs font-bold">VISIT SITE</span>
        </div>
      </div>
    </div>
  )
}
