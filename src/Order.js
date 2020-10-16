import React from 'react'

function Order({ details }) {
  if (!details) {
    return <h3>Working fetching your order&apos;s details...</h3>
  }

  return (
    <div className='order-container'>
      <h2>{details.name}</h2>
      <p>size: {details.size}</p>
      <p>text: {details.text}</p>
      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          toppings:
          <ul>
            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default Order