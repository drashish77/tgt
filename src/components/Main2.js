import { useState } from 'react'
import table from '../restaurant.png'
import drinks from './assets/drinks'
import MenuItem from './MenuItem'

const Main = () => {
  const [qty, setQty] = useState(0)

  const increaseHandler = () => {
    setQty(qty + 1)
  }

  const decreaseHandler = () => {
    qty && setQty(qty - 1)
  }
  const total = qty * drinks[0].price

  return (
    <main className='main'>
      <section className='side'>
        <div className='restaurant'>
          <img src={table} style={{ width: '100%' }} alt='' />
        </div>
        <div className='side_part side__middle'>
          <div className=''>
            <i className='far fa-calendar-check'></i>
          </div>
          <div className=''>
            <i className='fas fa-utensils'></i>
          </div>
          <div className=''>
            <i className='far fa-address-book'></i>
          </div>
        </div>
        <div className='side_part'>
          <i className='fas fa-cog'></i>
        </div>
      </section>
      <section className='dashboard_wrap'>
        <div className='head'>
          <div className=''></div>
          <div className=''>
            <h2>The Great Table</h2>
            <p>
              Today <i className='fas fa-angle-down'></i>
            </p>
          </div>
          <div className=''>
            <i className='fas fa-search'></i>
          </div>
        </div>
        <div className='dashboard'>
          <section className='dashboard_left'>
            <h4>
              Table <strong>5 - Mrs. Einstein</strong>
            </h4>
            <div className='btn-block'>
              <button>Drinks</button>
              <button>Food</button>
              <button>Dessert</button>
            </div>
            <div className='select'>
              <select id='drinks'>
                <option value='Wine'>Wine</option>
                <option value='Beer'>Beer</option>
                <option value='Rum'>Rum</option>
                <option value='Whiskey'>Whiskey</option>
              </select>
            </div>
            <div className='items'>
              {drinks.map((drink) => {
                return (
                  <MenuItem
                    name={drink.name}
                    img={drink.img}
                    price={drink.price}
                    increaseHandler={increaseHandler}
                    decreaseHandler={decreaseHandler}
                    quantity={qty}
                    key={Math.random()}
                  />
                )
              })}
            </div>
          </section>
          <section className='dashboard_right'>
            <div className='toggle'>
              <i className='fas fa-toggle-on'></i>
            </div>
            <div className='check'>
              <div className=''>
                <h4>Check</h4>
                <p>{total}</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Main
