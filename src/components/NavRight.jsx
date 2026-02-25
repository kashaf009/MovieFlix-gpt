import React from 'react'

const NavRight = () => {
  return (
    <section className="ml-40 flex items-center gap-10 pr-3">
          <div className="flex  gap-2  items-center">
            <i className="font-semibold ri-briefcase-line text-[1rem]"></i>
            <p className="font-semibold text-[0.75rem]">Corpurate</p>
          </div>
          <div className="flex gap-2  items-center">
            <i className="font-semibold ri-search-line text-[1rem]"></i>
            <p className="font-semibold text-[0.75rem]">Search</p>
          </div>

          <div className="flex  gap-2 items-center">
            <i class="font-semibold ri-discount-percent-line text-[1rem]"></i>
            <p className="font-semibold text-[0.75rem]">Offers</p>
          </div>

          <div className="flex gap-2  items-center">
            <i class="ri-customer-service-line font-semibold tex1rem]"></i>
            <p className="font-semibold text-[0.75rem]">Help</p>
          </div>

          <div className="flex gap-2  items-center">
            <i class="ri-user-line font-semibold text-[1rem]"></i>
            <p className="font-semibold text-[0.75rem]">Sign in</p>
          </div>

          <div className="flex gap-2  items-center">
            <i class="ri-shopping-cart-line font-semibold text-[1rem]"></i>
            <p className="font-semibold text-[0.75rem]">cart</p>
          </div>
        </section>
  )
}

export default NavRight