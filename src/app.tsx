import { MapPin, Calendar, ArrowRight } from 'lucide-react';

export function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-center bg-no-repeat bg-pattern">
      <div className="w-full max-w-3xl px-6 space-y-10 text-center">
        <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-lg text-zinc-300">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>
        
        <div className="flex items-center h-16 gap-3 px-4 bg-zinc-900 shadow-shape rounded-xl">
          <div className='flex items-center flex-1 gap-2'>
            <MapPin className='size-5 text-zinc-400' />
            <input type="text" placeholder="Para onde você vai?" className="flex-1 text-lg bg-transparent outline-none placeholder:text-zinc-400" />
          </div>
          
          <div className='flex items-center gap-2'>
            <Calendar className='size-5 text-zinc-400' />
            <input type="text" placeholder="Quando?" className="w-40 text-lg bg-transparent outline-none placeholder:text-zinc-400" />
          </div>

          <div className='w-px h-6 bg-zinc-400' />

          <button className='flex items-center gap-2 px-5 py-2 font-medium rounded-lg bg-lime-300 text-lime-950 hover:bg-lime-400'>
            Continuar
            <ArrowRight className='size-5'/>
          </button>
        </div>
        
        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
        com nossos <a href="#" className="underline text-zinc-300">termos de uso</a> e <a href="#" className="underline text-zinc-300">políticas de privacidade</a>.</p>
      </div>
    </div>
  )
}
