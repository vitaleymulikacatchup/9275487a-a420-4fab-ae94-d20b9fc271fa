"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, Bed, Briefcase, Calendar, Gift, Heart, HelpCircle, MessageSquare, Sparkles, ThumbsUp, Trophy, Users, Instagram, Facebook, Twitter } from 'lucide-react';

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="large"
      sizing="small"
      background="animatedAurora"
      cardStyle="solid-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Rooms", id: "product" },
            { name: "About", id: "about" },
            { name: "Amenities", id: "feature" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Haven Hotel"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Grand Haven Hotel"
          description="Experience unparalleled luxury and comfort in the heart of the city with world-class amenities and exceptional service"
          buttons={[
            { text: "Book Now", href: "https://booking.com" },
            { text: "Explore Rooms", href: "product" }
          ]}
          imageSrc="https://pixabay.com/get/g0f0354ac3b8bec31062f5c0008e3d69aace84103deb3dcbb721aec1f964e1cd6bf3c4b80ea78278c2e9324c2d45f132b0b5b9445d02b80685710f02d68d930f3_1280.jpg"
          imageAlt="Grand Haven Hotel exterior"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Grand Haven Hotel, we believe luxury is not just about opulent surroundings, but about creating moments that matter. Since 1985, we have been dedicated to providing our guests with extraordinary experiences that blend timeless elegance with modern comfort."
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardSeven
          title="World-Class Amenities"
          description="Discover exceptional facilities designed to enhance every moment of your stay"
          tag="Amenities"
          tagIcon={Sparkles}
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            {
              id: 1,
              title: "Spa & Wellness Center",
              description: "Rejuvenate your body and soul at our award-winning spa featuring signature treatments and state-of-the-art wellness facilities",
              imageSrc: "https://pixabay.com/get/g824b5ba7106c2c8de8b3c69bd5a1855a2aa02941bc2830a555f2a275774e9994d51586ccdff4f4d3aaf8443e195d9562e082c1f7d13191d1f5fe5d9f9ee11fc8_1280.jpg",
              imageAlt: "Luxury spa treatment room"
            },
            {
              id: 2,
              title: "Fine Dining Restaurant",
              description: "Savor culinary masterpieces crafted by our renowned chefs using the finest local and international ingredients",
              imageSrc: "https://pixabay.com/get/g8281d462ba9e7f4406209d948dbbe2fb6778e730a295d8f8c3714714f1f8776d0adf632b4f412ecd4586515516afdea088858e93947163ce07509eb1c886a021_1280.jpg",
              imageAlt: "Elegant restaurant dining room"
            },
            {
              id: 3,
              title: "Rooftop Infinity Pool",
              description: "Relax in our stunning infinity pool offering breathtaking panoramic views of the city skyline",
              imageSrc: "https://pixabay.com/get/g6b797f40ae5483ed442ecc81cd4c9c38c83759e95935be258696c05a795056d434a95c065b0c821e98ce4c30d017d087a6b19f9ed5737f00718bcdfa0d2e7d88_1280.jpg",
              imageAlt: "Rooftop infinity pool with city view"
            },
            {
              id: 4,
              title: "24/7 Fitness Center",
              description: "Maintain your fitness routine with our fully equipped gym featuring the latest exercise equipment",
              imageSrc: "https://pixabay.com/get/g21917614ffd2602c18ea021a4122db819eaf63f248e9e6ee497ee47ac6d6251dbd3afaa27b6ec1fa09d04e2a2316eb7027f8d162b1733d4c0dd5ba9773e411b9_1280.jpg",
              imageAlt: "Modern hotel fitness center"
            },
            {
              id: 5,
              title: "Concierge Services",
              description: "Our dedicated concierge team is available around the clock to assist with reservations, tours, and special requests",
              imageSrc: "https://pixabay.com/get/g0b1bf0bb731c05bf7cad3c28db633a83f88ba02b4ae2e71c2f89208b984c337151512a27a79e73bc7cbc7a08577e4b66751753f55603e2df9c603c60b64fcd37_1280.jpg",
              imageAlt: "Professional concierge service desk"
            },
            {
              id: 6,
              title: "Event Spaces",
              description: "Host memorable events in our elegant ballrooms and meeting spaces equipped with cutting-edge technology",
              imageSrc: "https://pixabay.com/get/gbee470ea0abdee20c9bbcf8f63208e4f24467912e72e77927e453edd3b0483df822348ef2c8128f8a1bfca33cab374b70251af5123d69efc460ff14856a8d93f_1280.jpg",
              imageAlt: "Grand hotel ballroom setup"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Luxury Accommodations"
          description="Choose from our carefully curated selection of rooms and suites, each designed to provide the ultimate in comfort and elegance"
          tag="Rooms & Suites"
          tagIcon={Bed}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "deluxe-suite",
              name: "Deluxe Suite",
              price: "From $299/night",
              imageSrc: "https://pixabay.com/get/gc07063f995cb8f1841db95e67d470d36d8d41ef150bc550abc38623831224424801902846b406b068aa5867fdd9bd5db0a651522fc92d607795128cf038d51c1_1280.jpg",
              imageAlt: "Deluxe suite bedroom",
              onProductClick: () => window.open('/rooms/deluxe', '_blank')
            },
            {
              id: "premium-suite",
              name: "Premium Ocean View",
              price: "From $459/night",
              imageSrc: "https://pixabay.com/get/g75a2035d11511a12f7c887d2f01b3cb8b44a0036a6c6dc8e536bcf2beeacf8a82fdb1962aee3509a21ef801900033600d4b7847553b9537d0290350bdec143ee_1280.jpg",
              imageAlt: "Premium suite with ocean view",
              onProductClick: () => window.open('/rooms/premium', '_blank')
            },
            {
              id: "presidential-suite",
              name: "Presidential Suite",
              price: "From $899/night",
              imageSrc: "https://pixabay.com/get/gb63f255aeadee775ec6eb36877a1b5b4f781e1bcef6ee8c3262c9c04273fb2aec66c2d3236fde47585125f3443bba19b7c50773b403540bcecf247c0942813ee_1280.jpg",
              imageAlt: "Presidential suite living area",
              onProductClick: () => window.open('/rooms/presidential', '_blank')
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Hotel Packages"
          description="Discover our specially curated packages designed to enhance your stay with exclusive benefits and experiences"
          tag="Special Offers"
          tagIcon={Gift}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "romantic-getaway",
              badge: "Most Popular",
              badgeIcon: Heart,
              price: "$399/night",
              subtitle: "Perfect for couples seeking romance",
              features: [
                "Champagne upon arrival",
                "Couples spa treatment",
                "Candlelit dinner for two",
                "Late checkout until 2 PM",
                "Rose petal turndown service"
              ]
            },
            {
              id: "business-executive",
              badge: "Best Value",
              badgeIcon: Briefcase,
              price: "$349/night",
              subtitle: "Ideal for business travelers",
              features: [
                "Executive lounge access",
                "Complimentary breakfast",
                "High-speed Wi-Fi",
                "24/7 business center",
                "Express laundry service"
              ]
            },
            {
              id: "family-vacation",
              badge: "Family Choice",
              badgeIcon: Users,
              price: "$449/night",
              subtitle: "Great for family getaways",
              features: [
                "Connecting rooms available",
                "Kids eat free program",
                "Pool and game room access",
                "Babysitting services",
                "Family activity concierge"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Excellence in Numbers"
          description="Discover why Grand Haven Hotel is the preferred choice for discerning travelers worldwide"
          tag="Our Achievements"
          tagIcon={Award}
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          metrics={[
            {
              id: "1",
              value: "40",
              title: "years",
              description: "Of exceptional hospitality service",
              icon: Calendar
            },
            {
              id: "2",
              value: "98%",
              title: "satisfaction",
              description: "Guest satisfaction rating",
              icon: ThumbsUp
            },
            {
              id: "3",
              value: "15",
              title: "awards",
              description: "International hospitality awards",
              icon: Trophy
            },
            {
              id: "4",
              value: "250K+",
              title: "guests",
              description: "Happy guests served annually",
              icon: Users
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Guest Experiences"
          description="Hear from our valued guests about their unforgettable stays at Grand Haven Hotel"
          tag="Testimonials"
          tagIcon={MessageSquare}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "TechCorp Industries",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g34bf0f20848be9d1888df588d9cc5d5c3ca424234706db982aa472d9c079e747f0f98eec8d281afe36e35d6051d7a1502a0fb480787e30530c10d366559c78ff_1280.png",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Michael & Emma Chen",
              role: "Anniversary Guests",
              company: "Celebrating 10 Years",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g7c4e62e4c6d29c2f5ee5f6d05b5105ddd790241e14262ab5ba36655cee4475b93efcaca2496438420b23053b4b33aaa81d0b3c8bfff6bea143eac196b4b68f52_1280.jpg",
              imageAlt: "Michael and Emma Chen"
            },
            {
              id: "3",
              name: "David Rodriguez",
              role: "Business Executive",
              company: "Global Investments Ltd",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g66b0ceef2d14655d08a2f6cc6d18b3b5d631d95f28cc899a55c43e131cd73a58c00f3ccabcd0a3be5a7ed0325dafebb10b669db169ccdd948b91d56f5764131f_1280.jpg",
              imageAlt: "David Rodriguez portrait"
            },
            {
              id: "4",
              name: "Isabella Martinez",
              role: "Travel Blogger",
              company: "Luxury Wanderer",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gbf224854fb52a3fe16d5571aec1f860e3203f7e950913b757b531b0c02e8916b94267b0bb5cadf5befa3ede92c5f985bb225f7185fd60219398b1be5c7804032_1280.jpg",
              imageAlt: "Isabella Martinez portrait"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay at Grand Haven Hotel"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What time is check-in and check-out?",
              content: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport shuttle service. Please contact our concierge at least 24 hours in advance to arrange pickup."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "We feature three restaurants: our signature fine dining restaurant, a casual bistro, and a rooftop bar. Room service is available 24/7."
            },
            {
              id: "4",
              title: "Is parking available?",
              content: "Yes, we offer both valet parking ($35/night) and self-parking ($25/night). Complimentary parking is included with our premium suites."
            },
            {
              id: "5",
              title: "What is your cancellation policy?",
              content: "Cancellations must be made 48 hours prior to arrival to avoid charges. Premium suites require 72 hours notice. Special packages may have different policies."
            },
            {
              id: "6",
              title: "Do you allow pets?",
              content: "Yes, we welcome pets up to 40 pounds with a $75 pet fee per stay. Please inform us when booking to ensure pet-friendly accommodations."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Contact Grand Haven Hotel"
          description="Get in touch with us for reservations, inquiries, or special requests. Our team is here to make your stay exceptional."
          buttonText="Send Message"
          inputs={[
            { name: "name", type: "text", placeholder: "Your Full Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
            { name: "checkin", type: "date", placeholder: "Check-in Date", required: false }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your needs, special requests, or questions...",
            rows: 5,
            required: true
          }}
          onSubmit={(data) => console.log('Contact form submitted:', data)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Grand Haven Hotel"
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "product" },
                { label: "Amenities", href: "feature" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Event Spaces", href: "events" },
                { label: "Business Center", href: "business" },
                { label: "Airport Transfer", href: "transport" }
              ]
            },
            {
              title: "Information",
              items: [
                { label: "About Us", href: "about" },
                { label: "Contact", href: "contact" },
                { label: "Location", href: "location" },
                { label: "Careers", href: "careers" }
              ]
            },
            {
              title: "Policies",
              items: [
                { label: "Privacy Policy", href: "privacy" },
                { label: "Terms of Service", href: "terms" },
                { label: "Cancellation", href: "cancellation" },
                { label: "Accessibility", href: "accessibility" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com/grandhaven", ariaLabel: "Instagram" },
            { icon: Facebook, href: "https://facebook.com/grandhaven", ariaLabel: "Facebook" },
            { icon: Twitter, href: "https://twitter.com/grandhaven", ariaLabel: "Twitter" }
          ]}
          copyrightText="© 2025 Grand Haven Hotel. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}