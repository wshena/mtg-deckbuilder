import React from 'react'
import AppContainer from './AppContainer'

const MainContainer = ({children}:{children:React.ReactNode}) => {
  return (
    <AppContainer>
      <div className="max-w-[1440px] mx-auto">
        {children}
      </div>
    </AppContainer>
  )
}

export default MainContainer