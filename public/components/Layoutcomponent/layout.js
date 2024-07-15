import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>E-commerce Website</title>
        <meta name="description" content="An E-commerce Website built with Next.js and Tailwind CSS" />
      </Head>
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">E-commerce Website</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4">
        {children}
      </main>
      <footer className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">© 2024 E-commerce Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
