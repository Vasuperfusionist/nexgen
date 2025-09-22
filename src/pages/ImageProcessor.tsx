import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { processImageFromUrl } from '@/utils/backgroundRemoval';
import { useToast } from '@/hooks/use-toast';

const ImageProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const processImage = async () => {
    setIsProcessing(true);
    try {
      toast({
        title: "Processing image...",
        description: "Removing background from the company name image"
      });

      const processedBlob = await processImageFromUrl('/lovable-uploads/ce547a28-2623-4e19-80db-8b380f8857fc.png');
      const url = URL.createObjectURL(processedBlob);
      setProcessedImageUrl(url);
      
      toast({
        title: "Success!",
        description: "Background removed successfully"
      });
    } catch (error) {
      console.error('Error processing image:', error);
      toast({
        title: "Error",
        description: "Failed to remove background",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadImage = () => {
    if (processedImageUrl) {
      const link = document.createElement('a');
      link.href = processedImageUrl;
      link.download = 'nexgen-healthcare-no-bg.png';
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Background Removal Tool</h1>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Original Image:</h3>
            <img 
              src="/lovable-uploads/ce547a28-2623-4e19-80db-8b380f8857fc.png" 
              alt="Original NeXgen Healthcare logo"
              className="max-w-full h-auto border rounded-lg"
            />
          </div>

          <Button 
            onClick={processImage}
            disabled={isProcessing}
            className="w-full"
          >
            {isProcessing ? 'Removing Background...' : 'Remove Background'}
          </Button>

          {processedImageUrl && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Processed Image (Background Removed):</h3>
              <img 
                src={processedImageUrl} 
                alt="NeXgen Healthcare logo without background"
                className="max-w-full h-auto border rounded-lg"
              />
              <Button 
                onClick={downloadImage}
                className="mt-4 w-full"
                variant="outline"
              >
                Download Image
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageProcessor;