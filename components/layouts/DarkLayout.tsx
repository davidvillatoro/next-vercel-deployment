/* import { FC } from "react"
 */

import React from "react"

const DarkLayout = ({children}:{children: React.ReactNode})  => {  //siempre children e palabra reservada o propia de NEXT SIEMPRA BA HACER ASI
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: '10px',
        borderRadius:"5px"
    }}>

        <h3>Dark-Layout</h3>
        <div>
            {children}
        </div>

    </div>
  )
}
 

export default DarkLayout;
