import { Button } from "./components/ui/button";
import { Github, FileVideo, Upload, Wand2} from "lucide-react";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "./components/ui/select";
import { Slider } from "./components/ui/slider";



export function App() {
  
  return (
  <div className="min-h-screen flex flex-col" >
    <div className="px-6 py-3 flex items-center justify-between border-b">
      <h1 className="text-xl font-bold">Upload.ia</h1>

      <div className="flex items-center gap-3">
       <span className="text-sm text-muted-foreground" >
        Desenvolvido por Guilherme Alves
         </span>

         <Separator orientation="vertical" className="h-6"></Separator>

       <Button variant='outline'>
        <Github className="w-4 h-4 mr-2">
          
        </Github>
       </Button>
      </div>
    </div>
    <main className="flex-1 p-6 flex gap-6">
       <div className="flex flex-col flex-1 gap-4" >
        <div className="grid grid-rows-2 gap-4 flex-1">
          <Textarea 
          placeholder="Inclua o prompt para a ia..."
          className="resize-none p-5 leading-relaxed"
          />
          <Textarea 
          placeholder="Resultado gerado pela ia" readOnly
          className="resize-none p-5 leading-relaxed"
          />

        </div>
        <p className="text-sn text-muted-foreground">
          Lembre-se: Você pode utulizar a variável <code className="text-violet-400">{'{transcription}'}</code> no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado

        </p>
       </div>
       <aside className="w-80 space-y-6">
        <form className="space-y-6">
          <label htmlFor="video"
          className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary"
          >
            <FileVideo className="w-4 h-4"/>
            Selecione um arquivo mp4
          </label>
          <input type="file" id="video" accept="video/mp4" className="sr-only" />
           <Separator/>
           <div className="space-y-2">
            <Label htmlFor="transcription_prompt">Prompt de transcrição</Label>
            <Textarea id="transcription_prompt" className="min-h-20 leading-relaxed" 
            placeholder="Por favor, inclua palavras-chaves mencionadas no vídeo separadas por vírgulas!"
            />
           </div>
           <Button type="submit" className="w-full">
            Carregar vídeo
            <Upload className="w-4 h-4 ml-2"/>
           </Button>
        </form>
        <Separator/>
        <form className="space-y-6" >
        <div className="space-y-2">
           <Label>Prompt</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma opção"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="title">Título do Yotube</SelectItem>
              <SelectItem value="description">Descrição do vídeo </SelectItem>
            </SelectContent>
          </Select>
         
          </div>
          
          <div className="space-y-2">
           <Label>Modelo</Label>
          <Select  disabled defaultValue="gpt3.5">
            <SelectTrigger>
              <SelectValue/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
            </SelectContent>
          </Select>
          <span className="block text-xs text-muted-foreground italic ">Em breve...</span>
          </div>
          <Separator/>
          <div className="space-y-4">
           <Label>Temperatura</Label>
            <Slider className="cursor-pointer"
            min={0}
            max={1}
            step={0.1}
            />
         
          <span className="block text-xs text-muted-foreground italic leading-relaxed ">Cuidado: Valores mais altos podem deixar mais criativo, porém, mais chances de haver erros.</span>
          </div>
          <Separator/>
          <Button type="submit" className="">
            Gerar
            <Wand2 className="w-4 h-4 ml-2"/>
          
          </Button>
        </form>
       </aside>
    </main>
  </div>
  )
}

