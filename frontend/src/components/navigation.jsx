export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a  className='navbar-brand page-scroll' href='#page-top'>
          <span><img class="logo" src="https://media.discordapp.net/attachments/763271260120809532/909086767938949160/phm-logo2.png?width=417&height=409" alt=""/></span>
          </a>
          <a className='navbar-brand page-scroll' href='#page-top'>
          PHOENIX HOSTEL MANAGEMENT
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About us
              </a>
            </li>
            <li>
              <a href='#gallery' className='page-scroll'>
                Gallery
              </a>
            </li>
            
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
             <li>
              <a href='/adminlogin' className='page-scroll'>
                Admin Login
              </a>
            </li>
            <li>
              <a href='/view' className='page-scroll'>
                View Availablility
              </a>
            </li>

            
          </ul>
        </div>
      </div>
    </nav>
  )
}

// updated