import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HobiCitaCard({ judul, isi }) {
  return (
    <Card className="my-4 w-full">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary">{judul}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 text-base text-muted-foreground space-y-2">
          {isi.map((hobiCita) => (
            <li key={hobiCita}>{hobiCita}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
