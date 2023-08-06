import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="py-10 flex flex-col lg:flex-row justify-center w-full">
        <p>
          Miguel &copy {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
