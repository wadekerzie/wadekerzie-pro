import { Routes, Route } from 'react-router-dom'
import ProfileHeader from './components/ProfileHeader'
import LinkHub from './components/LinkHub'
import SocialFooter from './components/SocialFooter'
import Work from './pages/Work'
import Career from './pages/Career'

function HomePage() {
    return (
        <>
            <ProfileHeader />
            <LinkHub />
            <SocialFooter />
        </>
    )
}

function App() {
    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-hub mx-auto">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/career" element={<Career />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
