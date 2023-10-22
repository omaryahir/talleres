import ReactDOM from "react-dom/client"
import App from "./App";

const rootContainer = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootContainer)

root.render(<App />)