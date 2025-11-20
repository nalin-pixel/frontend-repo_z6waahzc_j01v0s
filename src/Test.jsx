import { useState, useEffect } from 'react'

function Test() {
  const [backendStatus, setBackendStatus] = useState('vérification...')
  const [backendUrl, setBackendUrl] = useState('')
  const [databaseStatus, setDatabaseStatus] = useState(null)

  useEffect(() => {
    checkBackendConnection()
  }, [])

  const checkBackendConnection = async () => {
    try {
      // Récupère l'URL du backend depuis la variable d'environnement
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      setBackendUrl(baseUrl)

      // Test de connectivité backend
      const response = await fetch(`${baseUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()
        setBackendStatus(`✅ Connecté - ${data.message || 'OK'}`)
        // Puis test de la base de données
        await checkDatabaseConnection(baseUrl)
      } else {
        setBackendStatus(`❌ Échec - ${response.status} ${response.statusText}`)
        setDatabaseStatus({ error: 'Backend inaccessible' })
      }
    } catch (error) {
      setBackendStatus(`❌ Erreur - ${error.message}`)
      setDatabaseStatus({ error: 'Backend inaccessible' })
    }
  }

  const checkDatabaseConnection = async (baseUrl) => {
    try {
      const response = await fetch(`${baseUrl}/test`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const dbData = await response.json()
        setDatabaseStatus(dbData)
      } else {
        setDatabaseStatus({ error: `Échec du test base de données - ${response.status}` })
      }
    } catch (error) {
      setDatabaseStatus({ error: `Test base de données impossible - ${error.message}` })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-8">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Test Backend & Base de données
        </h1>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">URL du backend :</h3>
            <p className="text-sm text-gray-600 break-all bg-gray-100 p-2 rounded">
              {backendUrl || 'Détection...'}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Statut du backend :</h3>
            <p className="text-sm font-mono bg-gray-100 p-2 rounded">
              {backendStatus}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Statut de la base de données :</h3>
            <div className="text-sm bg-gray-100 p-3 rounded">
              {databaseStatus ? (
                databaseStatus.error ? (
                  <p className="text-red-600 font-mono">{databaseStatus.error}</p>
                ) : (
                  <div className="space-y-2">
                    <p><span className="font-semibold">Backend :</span> {databaseStatus.backend}</p>
                    <p><span className="font-semibold">Base :</span> {databaseStatus.database}</p>
                    <p><span className="font-semibold">DB URL :</span> {databaseStatus.database_url}</p>
                    <p><span className="font-semibold">Nom DB :</span> {databaseStatus.database_name}</p>
                    <p><span className="font-semibold">Connexion :</span> {databaseStatus.connection_status}</p>
                    {databaseStatus.collections && databaseStatus.collections.length > 0 && (
                      <p><span className="font-semibold">Collections :</span> {databaseStatus.collections.join(', ')}</p>
                    )}
                  </div>
                )
              ) : (
                <p className="text-gray-500 font-mono">Vérification de la base de données...</p>
              )}
            </div>
          </div>

          <button
            onClick={checkBackendConnection}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors"
          >
            Re-tester
          </button>

          <a
            href="/"
            className="block w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded text-center transition-colors"
          >
            Retour à l’accueil
          </a>
        </div>
      </div>
    </div>
  )
}

export default Test
