import { Layout } from "@/components/layout/Layout";
import { CheckCircle, Award, Users, Target } from "lucide-react";
import cottonFabric from "@/assets/cotton-fabric.jpg";

const values = [
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We never compromise on quality. Every meter of fabric that leaves our facility meets the highest standards of excellence.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your success is our success. We work closely with each client to understand and exceed their specific requirements.",
  },
  {
    icon: Target,
    title: "Precision & Consistency",
    description: "Our advanced machinery and skilled operators ensure consistent results across every batch, every time.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Crafting Quality Since Day One
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Located in the heart of Tirupur's textile district, TextileCraft has 
              established itself as a trusted name in cotton compacting and finishing 
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src={cottonFabric}
                  alt="Cotton fabric warehouse"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden md:block">
                <div className="font-display text-3xl font-bold">Since</div>
                <div className="text-sm">Poyambalayam, Tirupur</div>
              </div>
            </div>
            <div>
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                A Legacy of Excellence in Textile Finishing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                TextileCraft was founded with a singular vision: to provide world-class 
                cotton compacting services that help textile manufacturers deliver 
                superior products to their customers. Located in Poyambalayam, on the 
                outskirts of Tirupur — India's renowned knitwear capital — we are 
                strategically positioned to serve the region's vibrant textile industry.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Over the years, we have invested continuously in advanced machinery, 
                skilled workforce development, and process optimization. Today, we 
                process millions of meters of cotton fabric annually, serving clients 
                ranging from local manufacturers to international export houses.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to quality, precision, and customer satisfaction has 
                earned us the trust of textile businesses across Tamil Nadu and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              What Drives Us Every Day
            </h2>
            <p className="text-muted-foreground">
              Our core values guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">
                Our Commitment
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Quality. Precision. Satisfaction.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Consistent quality across every batch and every order",
                "On-time delivery to keep your production running smoothly",
                "Transparent communication throughout the process",
                "Competitive pricing without compromising on standards",
                "Environmentally responsible processing methods",
                "Dedicated support for all your fabric finishing needs",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
