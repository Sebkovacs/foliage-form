import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import Button from './Button';
import { Download, Loader2, Image as ImageIcon, AlertTriangle, Key } from 'lucide-react';

interface Asset {
  id: string;
  name: string;
  filename: string;
  prompt: string;
  fallbackUrl: string;
  aspectRatio: "16:9" | "1:1" | "3:4" | "4:3";
}

const assets: Asset[] = [
  {
    id: 'hero',
    name: 'Hero Background',
    filename: 'hero.png',
    prompt: 'Photorealistic wide shot of a high-end boutique office in Newcastle Australia, soft morning natural light, lush Fiddle Leaf Figs, soft pastel beige, sage green and terracotta colour palette, linen textures, designer furniture, interior design photography, 8k resolution, architectural digest style, boho chic luxury',
    fallbackUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    aspectRatio: '16:9'
  },
  {
    id: 'about',
    name: 'About Jessie-Gray',
    filename: 'about-jessie.png',
    prompt: 'Medium shot portrait of a stylish female interior designer with tied back hair, arranging a ceramic plant pot in a modern office, wearing soft neutral linen clothing, professional photography, warm soft lighting, boho chic aesthetic, photorealistic, luxury vibes',
    fallbackUrl: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    aspectRatio: '4:3'
  },
  {
    id: 'phil-main',
    name: 'Philosophy Main',
    filename: 'philosophy-main.png',
    prompt: 'Interior design photography of a curated office corner, mid-century modern armchair in cream boucle fabric, large healthy indoor plant in a textured terracotta pot, sunlight casting shadows on the wall, minimal and elegant, soft pastel tones',
    fallbackUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    aspectRatio: '4:3'
  },
  {
    id: 'phil-detail',
    name: 'Philosophy Detail',
    filename: 'philosophy-detail.png',
    prompt: 'Close up detail shot of a plant leaf texture against a soft warm beige wall, clay pot detail, shallow depth of field, macro photography, calming nature vibes, high resolution, soft lighting',
    fallbackUrl: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    aspectRatio: '1:1'
  },
  {
    id: 'plant-fiddle',
    name: 'Fiddle Leaf Fig',
    filename: 'plant-fiddle.png',
    prompt: 'Studio photography of a Ficus Lyrata (Fiddle Leaf Fig) tree in a textured basket or clay pot, isolated on a clean bright cream background, large violin shaped leaves, photorealistic, interior design product shot, soft lighting',
    fallbackUrl: 'https://images.unsplash.com/photo-1597054652230-f2038747a255?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    aspectRatio: '3:4'
  },
  {
    id: 'plant-peace',
    name: 'Peace Lily',
    filename: 'plant-peace.png',
    prompt: 'Studio photography of a lush Peace Lily Sensation plant in a white designer pot, isolated on a clean bright cream background, large dark green leaves and white flowers, photorealistic, interior design product shot',
    fallbackUrl: 'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    aspectRatio: '3:4'
  },
  {
    id: 'plant-ivy',
    name: 'Devils Ivy',
    filename: 'plant-ivy.png',
    prompt: 'Studio photography of a trailing Devils Ivy (Pothos) plant cascading out of a hanging pot, isolated on a clean bright cream background, lush green leaves, photorealistic, interior design product shot',
    fallbackUrl: 'https://images.unsplash.com/photo-1598971861713-54ad16a75af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    aspectRatio: '3:4'
  },
  {
    id: 'plant-castiron',
    name: 'Cast Iron Plant',
    filename: 'plant-castiron.png',
    prompt: 'Studio photography of an Aspidistra (Cast Iron Plant) in a dark textured pot, isolated on a clean bright cream background, dark vertical leaves, photorealistic, interior design product shot',
    fallbackUrl: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    aspectRatio: '3:4'
  },
   {
    id: 'pot-fiber',
    name: 'Fiberstone Pot',
    filename: 'pot-fiber.png',
    prompt: 'Product shot of a grey fiberstone plant pot, modern minimalist style, placed on a wooden floor, soft daylight, photorealistic, soft shadows',
    fallbackUrl: 'https://images.unsplash.com/photo-1517816428103-7dc308d7d623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    aspectRatio: '1:1'
  },
  {
    id: 'pot-alum',
    name: 'Aluminium Pot',
    filename: 'pot-alum.png',
    prompt: 'Product shot of a matte sage green spun aluminium plant pot, sleek executive style, placed on a white surface, sharp lighting, photorealistic',
    fallbackUrl: 'https://images.unsplash.com/photo-1628124269325-1e42b28c2e64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    aspectRatio: '1:1'
  },
  {
    id: 'pot-glaze',
    name: 'Glazed Pot',
    filename: 'pot-glaze.png',
    prompt: 'Product shot of a textured white glazed ceramic plant pot, artisan style, placed on a stone surface, soft organic lighting, photorealistic, boho chic',
    fallbackUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    aspectRatio: '1:1'
  },
  {
    id: 'port-min',
    name: 'Portfolio Minimalist',
    filename: 'portfolio-minimal.png',
    prompt: 'Interior shot of a modern minimalist tech office, white desk, macbook, and a snake plant in a concrete pot, clean lines, bright airy, soft pastel tones',
    fallbackUrl: 'https://images.unsplash.com/photo-1599827668582-7d351336c1c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    aspectRatio: '3:4'
  },
  {
    id: 'port-trop',
    name: 'Portfolio Tropical',
    filename: 'portfolio-tropical.png',
    prompt: 'Interior shot of an executive boardroom with a large Bird of Paradise plant in the corner, warm wood tones, leather chairs, lush and inviting, soft warm lighting',
    fallbackUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    aspectRatio: '3:4'
  },
  {
    id: 'port-ind',
    name: 'Portfolio Industrial',
    filename: 'portfolio-industrial.png',
    prompt: 'Interior shot of an industrial loft office with exposed brick walls painted white, trailing pothos plants on shelves, hanging lights, trendy workspace, boho chic styling',
    fallbackUrl: 'https://images.unsplash.com/photo-1598971861713-54ad16a75af8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    aspectRatio: '3:4'
  },
  {
    id: 'guide-cover',
    name: 'Guide Cover',
    filename: 'guide-cover.png',
    prompt: 'A minimalist abstract botanical line drawing of a monstera leaf, sage green and charcoal lines on cream paper texture, highly aesthetic book cover design, boho elegant style',
    fallbackUrl: 'https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    aspectRatio: '3:4'
  },
  {
    id: 'map',
    name: 'Service Map',
    filename: 'map-stylized.png',
    prompt: 'A stylized artistic map illustration of Newcastle Australia coastline, soft sage green, pastel pink and beige tones, minimalist vector style, abstract roads and ocean, high quality',
    fallbackUrl: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    aspectRatio: '16:9'
  }
];

const AssetGenerator: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [generatedImages, setGeneratedImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [hasKey, setHasKey] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkKey();
  }, []);

  const checkKey = async () => {
    if (window.aistudio && await window.aistudio.hasSelectedApiKey()) {
        setHasKey(true);
    }
  };

  const requestKey = async () => {
     try {
        if (window.aistudio) {
            await window.aistudio.openSelectKey();
            // Assuming success if we pass this line, or we re-check
            await checkKey();
        }
     } catch (e) {
         setError("Failed to select API key");
     }
  };

  const generateImage = async (asset: Asset) => {
    if (!hasKey) {
        await requestKey();
        if (!hasKey) return;
    }

    setLoading(prev => ({ ...prev, [asset.id]: true }));
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      // Using gemini-3-pro-image-preview for best results as per instructions
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: asset.prompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: asset.aspectRatio,
            imageSize: "1K"
          }
        },
      });

      const part = response.candidates?.[0]?.content?.parts?.find(p => p.inlineData);
      
      if (part && part.inlineData) {
        const base64Data = part.inlineData.data;
        const mimeType = part.inlineData.mimeType || 'image/png';
        const dataUrl = `data:${mimeType};base64,${base64Data}`;
        setGeneratedImages(prev => ({ ...prev, [asset.id]: dataUrl }));
      } else {
        throw new Error("No image data returned");
      }

    } catch (err: any) {
      console.error(err);
      setError(`Failed to generate ${asset.name}: ${err.message}`);
    } finally {
      setLoading(prev => ({ ...prev, [asset.id]: false }));
    }
  };

  const downloadImage = (id: string, filename: string) => {
    const dataUrl = generatedImages[id];
    if (!dataUrl) return;

    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-white overflow-y-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="font-serif text-3xl text-forest-green">Asset Generator</h2>
            <p className="text-gray-500">Generate bespoke AI images for your website. Save them to <code className="bg-gray-100 px-1 rounded">/public/images/</code></p>
          </div>
          <Button onClick={onClose} variant="outline">Close Generator</Button>
        </div>

        {!hasKey && (
             <div className="bg-linen border border-clay/30 p-6 rounded-md mb-8 flex items-start gap-4">
                <Key className="w-6 h-6 text-clay shrink-0" />
                <div>
                    <h3 className="font-bold text-forest-green mb-2">API Key Required</h3>
                    <p className="text-sm text-charcoal mb-4">
                        To generate high-quality "Gemini 3 Pro" images, you need to connect a paid API key.
                        <br/>
                        <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="underline font-bold text-clay">Billing Information</a>
                    </p>
                    <Button onClick={requestKey} className="bg-clay hover:bg-forest-green text-white border-none">
                        Connect API Key
                    </Button>
                </div>
            </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assets.map((asset) => (
            <div key={asset.id} className="border border-gray-200 rounded-lg p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-serif text-xl text-charcoal">{asset.name}</h3>
                <span className="text-xs bg-sage/20 text-forest-green px-2 py-1 rounded">{asset.aspectRatio}</span>
              </div>
              
              <div className="aspect-video bg-linen rounded mb-4 overflow-hidden relative group border border-sand">
                {generatedImages[asset.id] ? (
                  <img src={generatedImages[asset.id]} alt="Generated" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300">
                    <ImageIcon className="w-8 h-8 opacity-50" />
                  </div>
                )}
                
                {loading[asset.id] && (
                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
                        <Loader2 className="w-8 h-8 text-clay animate-spin" />
                    </div>
                )}
              </div>

              <div className="mt-auto space-y-3">
                <p className="text-xs text-gray-400 line-clamp-2" title={asset.prompt}>{asset.prompt}</p>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => generateImage(asset)} 
                    disabled={loading[asset.id]}
                    className="flex-1 py-2 text-xs"
                    variant="outline"
                  >
                    {generatedImages[asset.id] ? 'Regenerate' : 'Generate'}
                  </Button>
                  
                  {generatedImages[asset.id] && (
                    <Button 
                      onClick={() => downloadImage(asset.id, asset.filename)}
                      className="px-3 py-2 bg-clay text-white hover:bg-forest-green border-none"
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                {generatedImages[asset.id] && (
                    <p className="text-[10px] text-center text-gray-400">Save as: <span className="font-mono text-charcoal">{asset.filename}</span></p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssetGenerator;