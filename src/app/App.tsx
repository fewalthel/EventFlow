import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Header} from "@widgets/Header";
import {Footer} from "@widgets/Footer";
import {MainPage} from "@pages/MainPage";
import {EventsPage} from "@pages/EventsPage";
import {PlacesPage} from "@pages/PlacesPage";
import {NotFoundPage} from "@pages/NotFoundPage";
import {SignInPage} from "@pages/SignInPage";
import {SignUpPage} from "@pages/SignUpPage";
import {EventPage} from "@pages/EventPage";
import {PlacePage} from "@pages/PlacePage";
import {PeoplePage} from "@pages/PeoplePage";
import {SearchPage} from "@pages/SearchPage";

function App() {

    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/events" element={<EventsPage/>}/>
                <Route path="/places" element={<PlacesPage/>}/>
                <Route path="/*" element={<NotFoundPage/>}/>
                <Route path="/sign_in" element={<SignInPage/>}/>
                <Route path="/sign_up" element={<SignUpPage/>}/>
                <Route path="/search" element={<SearchPage/>}/>


                <Route path="/event" element={<EventPage/>}/>
                <Route path="/place" element={<PlacePage/>}/>
                <Route path="/people" element={<PeoplePage/>}/>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default App