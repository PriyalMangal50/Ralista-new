import ProductsOTCHomeCare from "./pages/ProductsOTCHomeCare";
import ProductsKitchenHomeCare from "./pages/ProductsKitchenHomeCare";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products1 from "./pages/Products1";
import Products2 from "./pages/Products2";
import Products3 from "./pages/Products3";

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
          <Route path="/productsotchomecare" element={<ProductsOTCHomeCare />} />
          <Route path="/productskitchenhomecare" element={<ProductsKitchenHomeCare />} />
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
