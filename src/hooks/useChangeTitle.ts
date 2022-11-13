import { useEffect, useState } from 'react'

const useChangeTitle = (title?: string) => {
  const [documentTitle, setDocumentTitle] = useState(title)
  useEffect(() => {
    if (!title) {
      document.title = `OniChat from Shirakayo👺`
    } else {
      document.title = `${documentTitle} - OniChat from Shirakayo👺`
    }
  }, [documentTitle, title])

  return [documentTitle, setDocumentTitle]
}

export { useChangeTitle }
