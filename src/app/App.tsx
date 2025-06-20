import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Header} from "@widgets/Header";
import {Footer} from "@widgets/Footer";
import {MainPage} from "@pages/MainPage";
import {EventsPage} from "@pages/EventsPage";
import {PlacesPage} from "@pages/PlacesPage";
import {NotFoundPage} from "@pages/NotFoundPage";
import {SearchPage} from "@pages/SearchPage";
import {EventPage} from "@pages/EventPage";
import {PlacePage} from "@pages/PlacePage";
import {PeoplePage} from "@pages/PeoplePage";
import {ProfilePage} from "@pages/ProfilePage";
import { useState } from 'react';
import { Index } from 'widgets/Modal';
import { SignInForm } from 'widgets/SignInForm';
import SignUpForm from 'widgets/SignUpForm';
import { BottomNavbar } from "@widgets/BottomNavbar";

function App() {
    const [isSignInOpen, setSignInOpen] = useState(false);
    const [isSignUpOpen, setSignUpOpen] = useState(false);

    const closeSignInModal = () => setSignInOpen(false);

    return (
        <Router basename="/EventFlow">
            <Header onSignInClick={() => setSignInOpen(true)} />
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/events" element={<EventsPage/>}/>
                <Route path="/places" element={<PlacesPage/>}/>
                <Route path="/*" element={<NotFoundPage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/event" element={<EventPage/>}/>
                <Route path="/place" element={<PlacePage/>}/>
                <Route path="/people" element={<PeoplePage/>}/>
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
            <Footer/>
            <Index isOpen={isSignInOpen} onClose={closeSignInModal}>
                <SignInForm onSignUpClick={() => {
                  closeSignInModal();
                  setSignUpOpen(true);
                }} />
            </Index>
            <Index isOpen={isSignUpOpen} onClose={() => setSignUpOpen(false)}>
                <SignUpForm />
            </Index>
            <BottomNavbar
              onSignInClick={() => setSignInOpen(true)}
              isSignInOpen={isSignInOpen}
              onNavClick={closeSignInModal}
            />
        </Router>
    )
}

export default App