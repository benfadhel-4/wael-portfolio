import "./globals.css";

export const metadata = {
  title: "Wael BEN FADHEL | Software Engineer",
  description:
    "Portfolio de Wael BEN FADHEL, ingénieur logiciel spécialisé en .NET, ASP.NET Core, SQL Server, Oracle et React.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Wael BEN FADHEL | Software Engineer",
    description: "Software Engineer | Full-Stack .NET Developer",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
