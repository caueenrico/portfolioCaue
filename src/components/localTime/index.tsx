import { useEffect, useState } from "react";

const formatter = () =>
  new Intl.DateTimeFormat("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  });

// Rendered only on the client so the server HTML never disagrees with the visitor's clock.
export function LocalTime({ prefix }: { prefix?: string }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = formatter();
    const update = () => setTime(format.format(new Date()));
    update();
    const id = window.setInterval(update, 15_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="local-time">
      {prefix ? `${prefix} ` : ""}GRU {time ?? "--:--"}
    </span>
  );
}
