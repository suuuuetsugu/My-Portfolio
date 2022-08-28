import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export const RedirectPage: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/login') // ここでリダイレクト
  }, [])

  return null
}