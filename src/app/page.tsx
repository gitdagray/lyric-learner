import ClientWrapper from "./components/ClientWrapper"
import { LyricProvider } from "./context/LyricProvider"

export default function Home() {

  return (
    <main className="p-4 max-w-6xl mx-auto sm:min-h-screen flex flex-col">
      <h1 className="text-4xl text-center mb-3">Lyric Learner</h1>
      <LyricProvider>
        <ClientWrapper />
      </LyricProvider>
      <br />
      <p className="text-center">Copyright &copy; {" " + new Date().getFullYear()}</p>
    </main>
  )
}
