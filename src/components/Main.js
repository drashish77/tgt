import { useState } from 'react'
import table from '../restaurant.png'
import drinks from './assets/drinks'

const Main = () => {
  const [qty1, setQty1] = useState(0)
  const [qty2, setQty2] = useState(0)
  const [qty3, setQty3] = useState(0)
  const [qty4, setQty4] = useState(0)
  const [qty5, setQty5] = useState(0)
  const [qty6, setQty6] = useState(0)

  const increaseHandler1 = () => {
    setQty1(qty1 + 1)
  }

  const decreaseHandler1 = () => {
    qty1 && setQty1(qty1 - 1)
  }
  const increaseHandler2 = () => {
    setQty2(qty2 + 1)
  }

  const decreaseHandler2 = () => {
    qty2 && setQty2(qty2 - 1)
  }
  const increaseHandler3 = () => {
    setQty3(qty3 + 1)
  }

  const decreaseHandler3 = () => {
    qty3 && setQty3(qty3 - 1)
  }
  const increaseHandler4 = () => {
    setQty4(qty4 + 1)
  }

  const decreaseHandler4 = () => {
    qty4 && setQty4(qty4 - 1)
  }
  const increaseHandler5 = () => {
    setQty5(qty5 + 1)
  }

  const decreaseHandler5 = () => {
    qty5 && setQty5(qty5 - 1)
  }
  const increaseHandler6 = () => {
    setQty6(qty6 + 1)
  }

  const decreaseHandler6 = () => {
    qty6 && setQty6(qty6 - 1)
  }
  const total =
    qty1 * drinks[0].price +
    qty2 * drinks[1].price +
    qty3 * drinks[2].price +
    qty4 * drinks[3].price +
    qty5 * drinks[4].price +
    qty6 * drinks[5].price
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
              <div className='menu'>
                <div className='menuLeft'>
                  <img src={drinks[0].img} alt='' />
                </div>
                <div className='menuRight'>
                  <div className=''>
                    <h4>{drinks[0].name}</h4>
                    <h4>${drinks[0].price}</h4>
                  </div>
                  <div className='menuButton'>
                    <button onClick={decreaseHandler1}>-</button>
                    <span>{qty1}</span>
                    <button onClick={increaseHandler1}>+</button>
                  </div>
                </div>
              </div>
              <div className='menu'>
                <div className='menuLeft'>
                  <img src={drinks[1].img} alt='' />
                </div>
                <div className='menuRight'>
                  <div className=''>
                    <h4>{drinks[1].name}</h4>
                    <h4>${drinks[1].price}</h4>
                  </div>
                  <div className='menuButton'>
                    <button onClick={decreaseHandler2}>-</button>
                    <span>{qty2}</span>
                    <button onClick={increaseHandler2}>+</button>
                  </div>
                </div>
              </div>
              <div className='menu'>
                <div className='menuLeft'>
                  <img src={drinks[2].img} alt='' />
                </div>
                <div className='menuRight'>
                  <div className=''>
                    <h4>{drinks[2].name}</h4>
                    <h4>${drinks[2].price}</h4>
                  </div>
                  <div className='menuButton'>
                    <button onClick={decreaseHandler3}>-</button>
                    <span>{qty3}</span>
                    <button onClick={increaseHandler3}>+</button>
                  </div>
                </div>
              </div>
              <div className='menu'>
                <div className='menuLeft'>
                  <img src={drinks[3].img} alt='' />
                </div>
                <div className='menuRight'>
                  <div className=''>
                    <h4>{drinks[3].name}</h4>
                    <h4>${drinks[3].price}</h4>
                  </div>
                  <div className='menuButton'>
                    <button onClick={decreaseHandler4}>-</button>
                    <span>{qty4}</span>
                    <button onClick={increaseHandler4}>+</button>
                  </div>
                </div>
              </div>
              <div className='menu'>
                <div className='menuLeft'>
                  <img src={drinks[4].img} alt='' />
                </div>
                <div className='menuRight'>
                  <div className=''>
                    <h4>{drinks[4].name}</h4>
                    <h4>${drinks[4].price}</h4>
                  </div>
                  <div className='menuButton'>
                    <button onClick={decreaseHandler5}>-</button>
                    <span>{qty5}</span>
                    <button onClick={increaseHandler5}>+</button>
                  </div>
                </div>
              </div>
              <div className='menu'>
                <div className='menuLeft'>
                  <img src={drinks[5].img} alt='' />
                </div>
                <div className='menuRight'>
                  <div className=''>
                    <h4>{drinks[5].name}</h4>
                    <h4>${drinks[5].price}</h4>
                  </div>
                  <div className='menuButton'>
                    <button onClick={decreaseHandler6}>-</button>
                    <span>{qty6}</span>
                    <button onClick={increaseHandler6}>+</button>
                  </div>
                </div>
              </div>
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
