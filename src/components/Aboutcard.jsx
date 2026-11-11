import { Card, CardContent } from "@/components/ui/card";

export default function Aboutcard({ deskripsi }) {
  return (
    <Card className="my-4 w-full">
      <CardContent className="p-6">
        <p className="text-lg text-muted-foreground leading-relaxed">{deskripsi}</p>
      </CardContent>
    </Card>
  );
}
