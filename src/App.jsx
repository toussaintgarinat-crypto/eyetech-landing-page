import React from 'react';
import './App.css';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* Header Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 md:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Révolutionnez vos chantiers avec la précision millimétrique d'Eyetech Construction
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Des solutions de Réalité Augmentée et d'IA pour une efficacité et une précision inégalées dans le BTP.
          </p>
          <Button className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-3 rounded-full shadow-lg transition duration-300">
            Demander une Démonstration
          </Button>
        </div>
      </header>

      {/* Value Proposition Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Pourquoi choisir Eyetech Construction ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="p-6 shadow-lg rounded-lg bg-blue-50">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Précision Millimétrique</h3>
              <p className="text-gray-600">Réduction drastique des erreurs de mesure et d'exécution sur site.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-blue-50">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Guidage Interactif</h3>
              <p className="text-gray-600">Assistance en temps réel pour le marquage, le perçage et le positionnement.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-blue-50">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Optimisation des Coûts</h3>
              <p className="text-gray-600">Diminution du gaspillage de matériaux et du temps de travail.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-blue-50">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Gestion 3D Avancée</h3>
              <p className="text-gray-600">Intégration et visualisation complètes des modèles BIM/3D.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-blue-50">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Modularité</h3>
              <p className="text-gray-600">Des applications adaptées à chaque besoin spécifique du BTP.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Presentation Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Nos Solutions Innovantes</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <img src="https://via.placeholder.com/600x400?text=Perce-Mur+App" alt="Perce-Mur App" className="rounded-lg shadow-xl w-full" />
            </div>
            <div className="lg:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">L'application Perce-Mur</h3>
              <p className="text-gray-700 text-lg mb-6">
                Ancrage spatial persistant, marquage assisté et gestion 3D pour des opérations de perçage sans faute.
                Utilisez la puissance du LiDAR pour une re-localisation millimétrique et un guidage interactif inégalé.
              </p>
              <ul className="list-disc list-inside text-gray-600 text-lg space-y-2">
                <li>Ancrage LiDAR et re-localisation millimétrique</li>
                <li>Guidage interactif pour le marquage et le perçage</li>
                <li>Visualisation et gestion de modèles 3D</li>
                <li>Interface utilisateur intuitive</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Découvrez nos autres applications :</h3>
            <p className="text-gray-600 text-lg">Tradelayer Intelligence, ConstructOptimize, Building Scan VR – des outils complémentaires pour un écosystème complet.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Votre chantier en 3 étapes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 shadow-lg rounded-lg bg-green-50">
              <div className="text-5xl text-green-700 mb-4">1</div>
              <h3 className="text-xl font-semibold text-green-700 mb-3">Numérisation LiDAR</h3>
              <p className="text-gray-600">Scannez votre environnement avec une précision inégalée grâce à la technologie LiDAR.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-yellow-50">
              <div className="text-5xl text-yellow-700 mb-4">2</div>
              <h3 className="text-xl font-semibold text-yellow-700 mb-3">Planification RA/IA</h3>
              <p className="text-gray-600">Visualisez et interagissez avec vos modèles 3D en réalité augmentée pour une planification optimale.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-red-50">
              <div className="text-5xl text-red-700 mb-4">3</div>
              <h3 className="text-xl font-semibold text-red-700 mb-3">Exécution Optimisée</h3>
              <p className="text-gray-600">Guidez vos équipes avec des instructions claires et précises pour une exécution sans faute.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 px-4 md:px-8 bg-blue-700 text-white">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Prêt à transformer votre BTP ? Contactez-nous !</h2>
          <Card className="bg-white text-gray-800 p-8 shadow-xl rounded-lg">
            <CardContent>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="fullName">Nom Complet</Label>
                  <Input id="fullName" placeholder="Votre nom et prénom" />
                </div>
                <div>
                  <Label htmlFor="companyName">Nom de l'Entreprise</Label>
                  <Input id="companyName" placeholder="Nom de votre entreprise" />
                </div>
                <div>
                  <Label htmlFor="email">Adresse E-mail Professionnelle</Label>
                  <Input id="email" type="email" placeholder="email@entreprise.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Numéro de Téléphone (optionnel)</Label>
                  <Input id="phone" type="tel" placeholder="01 23 45 67 89" />
                </div>
                <div>
                  <Label htmlFor="requestType">Type de demande</Label>
                  <Select>
                    <SelectTrigger id="requestType">
                      <SelectValue placeholder="Sélectionnez un type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="demo">Demande de Démonstration</SelectItem>
                      <SelectItem value="quote">Demande de Devis Personnalisé</SelectItem>
                      <SelectItem value="info">Informations Générales</SelectItem>
                      <SelectItem value="partnership">Partenariat</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Votre Message</Label>
                  <Textarea id="message" placeholder="Décrivez votre besoin..." rows="4" />
                </div>
                <Button type="submit" className="w-full bg-blue-700 text-white hover:bg-blue-800 py-3 text-lg rounded-md transition duration-300">
                  Envoyer ma demande
                </Button>
              </form>
              <p className="text-sm text-gray-500 mt-4">Vos données sont traitées en toute confidentialité.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 md:px-8">
        <div className="container mx-auto text-center text-sm">
          <p className="mb-4">&copy; {new Date().getFullYear()} Eyetech Construction. Tous droits réservés.</p>
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="hover:text-blue-400 transition duration-300">Politique de confidentialité</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Conditions Générales</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Mentions légales</a>
          </div>
          <p>Contact: contact@eyetechconstruction.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

