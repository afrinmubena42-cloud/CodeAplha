import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { LoginPage } from '@/components/LoginPage';
import { MainApp } from '@/components/MainApp';

function AppContent() {
  const { isAuthenticated } = useAuth();
  
  return isAuthenticated ? <MainApp /> : <LoginPage />;
}

const Index = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default Index;
