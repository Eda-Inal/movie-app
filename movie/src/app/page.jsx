import variables from './variables.module.scss'
import styles from "./global.css"

export default function Home() {
  return (
   <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
  );
}
