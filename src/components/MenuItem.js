const MenuItem = ({
  img,
  name,
  price,
  quantity,
  increaseHandler,
  decreaseHandler,
}) => {
  return (
    <div className='menu'>
      <div className='menuLeft'>
        <img src={img} alt='' />
      </div>
      <div className='menuRight'>
        <div className=''>
          <h4>{name}</h4>
          <h4>${price}</h4>
        </div>
        <div className='menuButton'>
          <button onClick={decreaseHandler}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseHandler}>+</button>
        </div>
      </div>
    </div>
  )
}

export default MenuItem
