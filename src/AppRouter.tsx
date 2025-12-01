/**
 * AppRouter - Static version with React Router
 */

import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider, Navigate, useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom';
import { MainLayout } from '@/layouts';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';

// Loading component
const LoadingFallback: React.FC = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{ 
        width: '48px', 
        height: '48px', 
        border: '4px solid #e5e7eb', 
        borderTopColor: '#1E3A8A',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 16px'
      }}></div>
      <p style={{ color: '#6b7280' }}>Loading...</p>
    </div>
  </div>
);

// Error page component
const ErrorPage: React.FC = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  
  let errorMessage = 'An unexpected error occurred';
  let errorStatus = 500;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || errorMessage;
    errorStatus = error.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  const handleGoHome = React.useCallback(() => {
    navigate('/', { replace: true });
  }, [navigate]);

  const handleReload = React.useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      <div style={{ maxWidth: '32rem', width: '100%', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <AlertCircle size={48} color="#ef4444" />
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#111827' }}>
              {errorStatus === 404 ? 'Page Not Found' : 'Something went wrong'}
            </h1>
            <p style={{ color: '#6b7280', marginTop: '4px' }}>
              {errorStatus === 404 
                ? "The page you're looking for doesn't exist."
                : "We're sorry, but something unexpected happened."}
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 600, color: '#991b1b', marginBottom: '8px' }}>Error Details:</h2>
          <p style={{ fontSize: '14px', color: '#b91c1c', fontFamily: 'monospace', wordBreak: 'break-all' }}>{errorMessage}</p>
          {errorStatus && (
            <p style={{ fontSize: '12px', color: '#dc2626', marginTop: '8px' }}>Status Code: {errorStatus}</p>
          )}
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <button
            onClick={handleReload}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              backgroundColor: '#2563eb',
              color: 'white',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500
            }}
          >
            <RefreshCw size={18} /> Reload Page
          </button>
          <button
            onClick={handleGoHome}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              backgroundColor: '#4b5563',
              color: 'white',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500
            }}
          >
            <Home size={18} /> Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

// Lazy-loaded pages
const HomePage = lazy(() => import('@/pages/home').then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('@/pages/about').then((m) => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('@/pages/services').then((m) => ({ default: m.ServicesPage })));
const ProjectsPage = lazy(() => import('@/pages/projects').then((m) => ({ default: m.ProjectsPage })));
const CareersPage = lazy(() => import('@/pages/careers').then((m) => ({ default: m.CareersPage })));
const ContactPage = lazy(() => import('@/pages/contact').then((m) => ({ default: m.ContactPage })));
const BlogPage = lazy(() => import('@/pages/blog').then((m) => ({ default: m.BlogPage })));
const InternshipsPage = lazy(() => import('@/pages/internships').then((m) => ({ default: m.InternshipsPage })));
const TrainingPage = lazy(() => import('@/pages/training').then((m) => ({ default: m.TrainingPage })));

// Router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Suspense fallback={<LoadingFallback />}>
          <HomePage />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: '/about',
    element: (
      <MainLayout>
        <Suspense fallback={<LoadingFallback />}>
          <AboutPage />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: '/services',
    element: (
      <MainLayout>
        <Suspense fallback={<LoadingFallback />}>
          <ServicesPage />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: '/projects',
    element: (
      <MainLayout>
        <Suspense fallback={<LoadingFallback />}>
          <ProjectsPage />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: '/careers',
    element: (
      <MainLayout>
        <Suspense fallback={<LoadingFallback />}>
          <CareersPage />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: '/contact',
    element: (
      <MainLayout>
        <Suspense fallback={<LoadingFallback />}>
          <ContactPage />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: '/blog',
    element: (
      <MainLayout>
        <Suspense fallback={<LoadingFallback />}>
          <BlogPage />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: '/internships',
    element: (
      <MainLayout>
        <Suspense fallback={<LoadingFallback />}>
          <InternshipsPage />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: '/training',
    element: (
      <MainLayout>
        <Suspense fallback={<LoadingFallback />}>
          <TrainingPage />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
    errorElement: <ErrorPage />,
  },
]);

/**
 * AppRouter Component
 */
export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

