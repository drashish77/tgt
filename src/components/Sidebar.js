const Sidebar = () => {
  return (
    <div className='side'>
      <div className='restaurant'>
        <img src='./assets/restaurant.png' style='width: 100%' alt='' />
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
    </div>
  )
}

export default Sidebar
