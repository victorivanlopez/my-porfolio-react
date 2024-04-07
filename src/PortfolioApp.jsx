import { PortfolioProvider } from './context';
import { PortfolioLayout } from './layout';
import {
  HeroSection,
  AboutSection,
  ResumeSection,
  ProjectsSection,
  ContactSection
} from './components/sections';

export const PortfolioApp = () => {
  return (
    <PortfolioProvider>
      <PortfolioLayout>
        <HeroSection />
        <AboutSection />
        <ResumeSection />
        <ProjectsSection />
        <ContactSection />
      </PortfolioLayout>
    </PortfolioProvider>
  )
}