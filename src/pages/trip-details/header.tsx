import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

export function Header() {
    return (
        <div className="flex items-center justify-between h-16 px-4 rounded-xl bg-zinc-900 shadow-shape">
            <div className="flex items-center gap-2">
                <MapPin className="size-5 text-zinc-400" />
                <span className="text-lg text-zinc-100">Florianópolis, Brasil</span>
            </div>

            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                    <Calendar className="size-5 text-zinc-400" />
                    <span className="text-zinc-100">Florianópolis, Brasil</span>
                </div>

                <div className='w-px h-6 bg-zinc-800' />

                <Button variant="secondary" onClick={() => alert('hello world')}>
                    Alterar local/data
                    <Settings2 className='size-5' />
                </Button>
            </div>
        </div>
    );
}