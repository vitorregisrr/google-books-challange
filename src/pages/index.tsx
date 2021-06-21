import { useRouter } from 'next/dist/client/router'
import HomeTemplate from 'templates/Home'

export default function Home() {
  const router = useRouter()

  // retorna um loading, qq coisa enquanto tá sendo criado
  if (router.isFallback) return null

  return <HomeTemplate />
}
