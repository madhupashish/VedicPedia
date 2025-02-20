
import HeroSection from "./page-ui/hero/page"
import FourVedas from "./page-ui/fourvedas/page"
import AskYourQuestion from './page-ui/yourquestion/page'
import AboutVedicPedia from './page-ui/aboutvedic/page'
import FaqArticles from './page-ui/faqsarticles/page'
import Footer from './page-ui/footer/page'

export default function Home() {
  return (
    <>
      <HeroSection />
      <div>
        <FourVedas />
      </div>
      <div>
        <AskYourQuestion />
      </div>
      <div>
        <AboutVedicPedia />
      </div>
      <div>
        <FaqArticles />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
