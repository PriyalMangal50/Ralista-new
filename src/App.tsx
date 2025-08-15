import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products1 from "./pages/Products1";
import Products2 from "./pages/Products2";
import Products3 from "./pages/Products3";
import Products4 from "./pages/Products4";

import Products5 from "./pages/Products5";

import Products6 from "./pages/Products6";

import Products7 from "./pages/Products7";
import Products8 from "./pages/Products8";
import Products9 from "./pages/Products9";
import Products10 from "./pages/Products10";
import Products11 from "./pages/Products11";
import Products12 from "./pages/Products12";
import Products13 from "./pages/Products13";
import Products14 from "./pages/Products14";
import Products15 from "./pages/Products15";
import Products16 from "./pages/Products16";
import Products17 from "./pages/Products17";

import Industries from "./pages/Industries";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

import './styles/fonts.css';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products1" element={<Products1 />} />
          <Route path="/products2" element={<Products2 />} />
          <Route path="/products3" element={<Products3 />} />
          <Route path="/products4" element={<Products4 />} />
          <Route path="/products5" element={<Products5 />} />
          <Route path="/products6" element={<Products6 />} />
          <Route path="/products7" element={<Products7 />} />
          <Route path="/products8" element={<Products8 />} />
          <Route path="/products9" element={<Products9 />} />
          <Route path="/products10" element={<Products10 />} />
          <Route path="/products11" element={<Products11 />} />
          <Route path="/products12" element={<Products12 />} />
          <Route path="/products13" element={<Products13 />} />
          <Route path="/products14" element={<Products14 />} />
          <Route path="/products15" element={<Products15 />} />
          <Route path="/products16" element={<Products16 />} />
          <Route path="/products17" element={<Products17 />} />

          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
