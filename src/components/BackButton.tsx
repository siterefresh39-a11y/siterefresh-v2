import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="fixed top-20 left-4 z-40 text-sm bg-white/95 text-gray-900 hover:bg-white hover:shadow-lg backdrop-blur-sm border border-gray-200/50 transition-all"
      onClick={() => navigate(-1)}
      aria-label="Torna alla pagina precedente"
    >
      <ArrowLeft className="h-4 w-4 mr-1" />
      Indietro
    </Button>
  );
};

export default BackButton;
