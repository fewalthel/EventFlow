import {FC} from "react";
import {EventsSection} from "./EventsSection";
import {PrimarySection} from "./PrimarySection";
import {AboutSection} from "./AboutSection";
import {BenefitsSection} from "./BenefitsSection";

export const MainPage: FC = () => (
    <main>
        <PrimarySection/>
        <EventsSection/>
        <AboutSection/>
        <BenefitsSection/>
    </main>
);