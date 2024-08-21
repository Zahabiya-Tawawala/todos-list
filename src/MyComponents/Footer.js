import React from 'react'

const Footer = () => {
let footerStyle = {
  position: 'absolute',
  top: '100vh',
  width: '100%'
}
//how to add styles in react this is one way 

  return (
    <footer className='bg-dark text-light py-3'  style={footerStyle}>
      <p className='text-center'> 
      Copyright &copy; 2024 My Todos List
        </p>
      
    </footer>
  )
}

export default Footer
