import Image from 'next/image'

export default function Home() {

  console.log(`hola!!! token:${process.env.PUBLIC_NEXT_API_TOKEN}`)
  return (
    <main>
      Hello World !!
      
    </main>
  )
}
export async function getInitialProps() {
  const api_token = process.env.PUBLIC_NEXT_API_TOKEN;
  console.log(api_token);
  return api_token;
}