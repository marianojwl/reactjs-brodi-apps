import React from 'react'

function Switch({state, setState, label}) {
  return (
    <div className="form-check form-switch">
      <input
        checked={state} 
        onChange={(e) => setState(e.target.checked)}
        className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
        />
      <label className="form-check-label" for="flexSwitchCheckDefault">{label}</label>
    </div>
  )
}

export default Switch