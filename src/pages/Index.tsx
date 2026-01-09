import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BookingCalendar from "@/components/BookingCalendar";
import DoctorProfile from "@/components/DoctorProfile";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <DoctorProfile />
        <BookingCalendar />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
