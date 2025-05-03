"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle2, Loader2 } from "lucide-react"
import { supabase } from "@/lib/supabase"

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Test Supabase connection on component mount
  useEffect(() => {
    const testConnection = async () => {
      try {
        const { data, error } = await supabase
          .from('waitlist')
          .select('*')
          .limit(1)
        
        if (error) {
          console.error('Supabase connection error:', error)
          if (error.code === '42P01') {
            setError("La table waitList n'existe pas. Veuillez contacter l'administrateur.")
          } else if (error.code === '42501') {
            setError("Permission refusée. Veuillez contacter l'administrateur.")
          } else {
            setError(`Erreur de connexion: ${error.message}`)
          }
        } else {
          console.log('Supabase connection successful')
        }
      } catch (err) {
        console.error('Error testing connection:', err)
        setError("Erreur de connexion à la base de données")
      }
    }

    testConnection()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            created_at: new Date().toISOString(),
          }
        ])

      if (error) {
        console.error('Error inserting data:', error)
        if (error.code === '42P01') {
          setError("La table waitList n'existe pas. Veuillez contacter l'administrateur.")
        } else if (error.code === '42501') {
          setError("Permission refusée. Veuillez contacter l'administrateur.")
        } else {
          setError(`Erreur lors de l'envoi: ${error.message}`)
        }
        return
      }
      
      setIsSubmitted(true)
      setFormData({ fullName: "", email: "" })
    } catch (err) {
      console.error('Error submitting form:', err)
      setError("Une erreur s'est produite. Veuillez réessayer.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <Navbar />
      <main className="container max-w-2xl py-12 md:py-24">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Rejoignez la Liste d'Attente</CardTitle>
            <CardDescription>
              Soyez parmi les premiers à accéder à notre plateforme d'apprentissage en ligne
            </CardDescription>
            <div className="mt-4 text-sm text-muted-foreground">
              Les 1000 premiers étudiants inscrits recevront 2 cours gratuits !
            </div>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-8">
                <CheckCircle2 className="h-12 w-12 text-green-500" />
                <h3 className="text-xl font-semibold">Merci de votre intérêt !</h3>
                <p className="text-center text-muted-foreground">
                  Nous vous contacterons dès que la plateforme sera disponible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
                    {error}
                  </div>
                )}
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nom Complet</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder="Votre nom complet"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    "Rejoindre la Liste d'Attente"
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  )
} 