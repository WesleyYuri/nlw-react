import { Activity, CircleCheck } from "lucide-react";
import { api } from "../../lib/axios";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ptBR } from "date-fns/locale";

interface Activity {
    date: string;
    activities: {
        id: string;
        title: string;
        occurs_at: string;
    }[]
}

export function Activities() {
    const { tripId } = useParams();
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        api.get(`/trips/${tripId}/activities`).then(response => setActivities(response.data.activities));
    }, [tripId]);

    return (
        <div className="space-y-8">
            {activities.map(category => {
                return (
                    <div key={category.date} className="space-y-2.5">
                        <div className="flex items-baseline gap-2">
                            <span className="text-xl font-semibold text-zinc-300">Dia {format(category.date, 'd')}</span>
                            <span className="text-xs text-zinc-500">{format(category.date, 'EEEE', { locale: ptBR })}</span>
                        </div>
                        {category.activities.length > 0 ? (
                            <div className="space-y-2.5">
                                {category.activities.map(activity => {
                                    return (
                                        <div key={activity.id} className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                                            <CircleCheck className="size-5 text-lime-300" />
                                            <span className="text-zinc-100">{activity.title}</span>
                                            <span className="ml-auto text-sm text-zinc-400">{format(activity.occurs_at, 'HH:mm')}h</span>
                                        </div>
                                    )
                                })}
                            </div>
                        ) : (
                            <p className="text-xs text-zinc-500">Nenhuma atividade cadastrada nessa data.</p>
                        )}
                    </div>
                );
            })}

            {/* <div className="space-y-2.5">
                <div className="flex items-baseline gap-2">
                    <span className="text-xl font-semibold text-zinc-300">Dia 18</span>
                    <span className="text-xs text-zinc-500">Domingo</span>
                </div>
                <div className="space-y-2.5">
                    <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                        <CircleCheck className="size-5 text-lime-300" />
                        <span className="text-zinc-100">Academia em grupo</span>
                        <span className="ml-auto text-sm text-zinc-400">08:00</span>
                    </div>
                    <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                        <CircleCheck className="size-5 text-lime-300" />
                        <span className="text-zinc-100">Academia em grupo</span>
                        <span className="ml-auto text-sm text-zinc-400">08:00</span>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
