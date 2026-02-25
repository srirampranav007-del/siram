import { Layout } from "@/components/layout/Layout";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import compactingMachine from "@/assets/compacting-machine.jpg";

const processSteps = [
  {
    number: "01",
    title: "Feeding the Cotton",
    description: "The cotton is supplied into the machine by an operator who monitors the entry point, ensuring a consistent and smooth feed for optimal processing.",
  },
  {
    number: "02",
    title: "Steam Application",
    description: "The boiler generates steam that helps compact the cotton fibers, making them denser. Controlled steam ensures uniform treatment across the fabric.",
  },
  {
    number: "03",
    title: "Monitoring and Cleaning",
    description: "An operator oversees the process, and any dust or debris is removed using an air gun to maintain cleanliness and product quality.",
  },
  {
    number: "04",
    title: "Compacting and Folding",
    description: "Once the cotton is compacted, it is carefully folded and prepared for the packaging stage, ensuring neat and uniform output.",
  },
  {
    number: "05",
    title: "Packaging",
    description: "The compacted cotton is packed into polyethylene bags and sealed by the team, ready for dispatch to clients.",
  },
  {
    number: "06",
    title: "Quality Control",
    description: "The entire process is supervised by an operator who ensures optimal temperature, steam flow, and overall quality at every stage.",
  },
];

const benefits = [
  {
    title: "Reduced Shrinkage",
    description: "Compacting significantly reduces fabric shrinkage after washing — typically by 3-5%. Your end customers receive products that maintain their size and shape.",
  },
  {
    title: "Improved Dimensional Stability",
    description: "The compacting process mechanically stabilizes the fabric structure, ensuring consistent measurements and reliable performance during garment manufacturing.",
  },
  {
    title: "Enhanced Hand Feel",
    description: "Compacted fabrics feel softer and more luxurious. The process improves the fabric's drape and overall tactile quality.",
  },
  {
    title: "Better Surface Appearance",
    description: "Compacting creates a smoother, more uniform fabric surface with improved luster and visual appeal.",
  },
  {
    title: "Reduced Processing Issues",
    description: "Stabilized fabrics are easier to cut, sew, and process in garment manufacturing, reducing production waste and improving efficiency.",
  },
  {
    title: "Customer Satisfaction",
    description: "End products made from compacted fabrics perform better over time, leading to higher customer satisfaction and fewer returns.",
  },
];

const Process = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              The Art & Science of Cotton Compacting
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Discover how we transform ordinary cotton fabrics into premium, 
              dimensionally stable materials that exceed industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* What is Compacting */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">
                Understanding Compacting
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                What is Cotton Compacting?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Cotton compacting is a mechanical finishing process that improves the 
                dimensional stability of woven and knitted cotton fabrics. During the 
                manufacturing and processing stages, cotton fabrics are stretched in 
                various directions, creating internal tensions that cause shrinkage 
                when washed.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The compacting process uses a combination of controlled heat, moisture, 
                and mechanical compression to relax these tensions and stabilize the 
                fabric structure. The result is a fabric that maintains its dimensions 
                through washing and wear.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This process is essential for high-quality cotton products where 
                consistent sizing and minimal shrinkage are critical — from premium 
                t-shirts and garments to home textiles and industrial applications.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src={compactingMachine}
                  alt="Cotton compacting machine"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Step by Step
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Compacting Process
            </h2>
            <p className="text-muted-foreground">
              A systematic approach to delivering consistent, high-quality results 
              for every batch of fabric we process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Timeline Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-border" />
                )}
                
                {/* Step Number */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-xl p-6 shadow-card">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Final Steps */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-card rounded-xl p-8 shadow-card border-l-4 border-secondary">
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                Final Steps
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                After compacting, the cotton is weighed both before and after to measure the 
                reduction in thickness and ensure consistency. This careful measurement process 
                guarantees that every batch meets our strict quality standards and delivers 
                the expected results to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">
              Benefits
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Why Compact Your Cotton Fabrics?
            </h2>
            <p className="text-muted-foreground">
              Compacting delivers tangible improvements that benefit manufacturers, 
              brands, and end consumers alike.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-muted p-6 rounded-xl">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-8">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Process Your Fabrics?
          </h2>
          <p className="text-primary-foreground/85 text-lg max-w-2xl mx-auto mb-8">
            Contact us today to discuss your requirements and receive a customized quote 
            for your cotton compacting needs.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Process;
