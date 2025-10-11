import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="fixed top-20 left-4 z-40 text-sm backdrop-blur-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-xl shadow-lg transition-all duration-300"
      onClick={() => navigate(-1)}
      aria-label="Torna alla pagina precedente"
    >
      <ArrowLeft className="h-4 w-4 mr-1" />
      Indietro
    </Button>
  );
};

export default BackButton;
