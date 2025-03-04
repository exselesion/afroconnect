
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Account = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the external dashboard
    const timer = setTimeout(() => {
      window.location.href = "https://preview--business-nook-95.lovable.app/account";
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleCancel = () => {
    toast.info("Отменено перенаправление на личный кабинет");
    navigate("/");
  };

  return (
    <div className="container-custom min-h-screen pt-24 pb-16">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold">Перенаправление в личный кабинет</h1>
        <p className="text-muted-foreground">
          Вы будете перенаправлены на страницу личного кабинета через несколько секунд...
        </p>
        <div className="flex justify-center mt-4">
          <Button variant="outline" onClick={handleCancel}>
            Отменить и вернуться на главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Account;
