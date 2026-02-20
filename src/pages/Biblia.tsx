import { useState } from "react"

export default function Biblia() {
  const [livro, setLivro] = useState("john")
  const [capitulo, setCapitulo] = useState("3")
  const [texto, setTexto] = useState("")

  const buscarCapitulo = async () => {
    try {
      const response = await fetch(
        `https://bible-api.com/${livro}%20${capitulo}?translation=almeida`
      )
      const data = await response.json()
      setTexto(data.text)
    } catch (error) {
      console.error("Erro ao buscar capítulo:", error)
    }
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>Bíblia Online</h2>

      <input
        type="text"
        placeholder="Livro (ex: john)"
        value={livro}
        onChange={(e) => setLivro(e.target.value)}
      />

      <input
        type="text"
        placeholder="Capítulo"
        value={capitulo}
        onChange={(e) => setCapitulo(e.target.value)}
      />

      <button onClick={buscarCapitulo}>
        Buscar
      </button>

      <pre style={{ marginTop: "20px", whiteSpace: "pre-wrap" }}>
        {texto}
      </pre>
    </div>
  )
}
