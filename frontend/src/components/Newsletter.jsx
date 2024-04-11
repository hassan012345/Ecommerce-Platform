import React from 'react'

function Newsletter() {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Join Newsletter</h1>
      <p className="mb-5">Join our newsletter to get exclusive discount deals right in your inbox</p>
      <div className="join">
  <input className="input input-bordered join-item" placeholder="Email"/>
  <button className="btn btn-primary join-item rounded-r-full">Subscribe</button>
</div>
    </div>
  </div>
</div>
  )
}

export default Newsletter