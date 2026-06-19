import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { SignIn, SignInButton, SignOutButton, UserButton,Show,SignUpButton } from '@clerk/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Welcome,Coming Soon..</h1>

      <Show when="signed-out">
        <SignInButton mode = "modal" />
        <SignUpButton mode='modal' />
      </Show>
      <Show when="signed-in">
        <SignOutButton />
        <UserButton />
      </Show>
    </div>
  )
}

export default App
