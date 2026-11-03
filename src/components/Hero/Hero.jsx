import HeroContent from "./HeroContent";
import HeroMedia from "./HeroMedia";
import heroImage from "../../assets/hero.png";

function Hero(){
    return(
        <section>
            <HeroContent 
            label="Новая коллекция - 2026"
            title="Вещи, которые слыжат долго"
            description="Мы предлагаем вам только качественные вещи, которые прослужат вам долгое время. Наши товары изготовлены из высококачественных материалов и прошли строгий контроль качества."
          />
            <HeroMedia 
          image={heroImage}
            productCount={9}
            />
            </section>
    )
}

export default Hero;