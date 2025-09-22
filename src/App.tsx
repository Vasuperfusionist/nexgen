import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index";
import About from "./pages/About";
import Career from "./pages/Career";


import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Enrollment from "./pages/Enrollment";
import ReferFriend from "./pages/ReferFriend";
import Registration from "./pages/Registration";
import ImageProcessor from "./pages/ImageProcessor";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <PageTransition>
              <Index />
            </PageTransition>
          } />
          <Route path="/about" element={
            <PageTransition>
              <About />
            </PageTransition>
          } />
          <Route path="/career" element={
            <PageTransition>
              <Career />
            </PageTransition>
          } />
          <Route path="/contact" element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } />
          <Route path="/courses" element={
            <PageTransition>
              <Courses />
            </PageTransition>
          } />
          <Route path="/courses/:courseId" element={
            <PageTransition>
              <CourseDetail />
            </PageTransition>
          } />
          <Route path="/enrollment" element={
            <PageTransition>
              <Enrollment />
            </PageTransition>
          } />
          <Route path="/refer-friend" element={
            <PageTransition>
              <ReferFriend />
            </PageTransition>
          } />
          <Route path="/registration" element={
            <PageTransition>
              <Registration />
            </PageTransition>
          } />
          <Route path="/image-processor" element={
            <PageTransition>
              <ImageProcessor />
            </PageTransition>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
