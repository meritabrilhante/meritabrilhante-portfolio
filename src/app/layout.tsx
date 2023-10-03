import 'src/app/styles/globals.scss'
import { Providers } from "@/app/providers"


export const metadata = {
  title: 'Rita Brilhante',
  description: 'Designer e Engenheira de Software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
