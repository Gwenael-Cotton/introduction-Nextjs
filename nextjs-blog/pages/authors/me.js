import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <h1>Author , it's me</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}