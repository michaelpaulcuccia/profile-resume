import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/registry";
import { ThemeContextProvider } from "./context/ThemeContext";
import "./globals.css";
import Container from "../../components/Container";
import Nav from "../../components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Michael-Paul Cuccia",
  description: "profile and resume of michael-paul cuccia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ThemeContextProvider>
            <Container>
              <Nav />
              {children}
            </Container>
          </ThemeContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
