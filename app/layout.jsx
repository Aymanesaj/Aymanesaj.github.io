import "./globals.css";

export const metadata = {
  title: "Aymane Sajed",
  description: "Systems & Backend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
