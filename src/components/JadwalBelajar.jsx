import { Card, CardContent } from "@/components/ui/card";

export default function JadwalBelajar({ data }) {
  return (
    <Card className="overflow-hidden my-4">
      <CardContent className="p-0">
        <table className="w-full text-left border-collapse">
          <thead className="bg-primary text-primary-foreground text-sm">
            <tr>
              <th className="w-4 p-4 font-semibold">Hari</th>
              <th className="w-4 p-4 font-semibold">Waktu</th>
              <th className="w-4 p-4 font-semibold">Kegiatan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-sm text-muted-foreground">
            {data?.map((item) => (
              <tr key={item.hari} className="hover:bg-muted/50">
                <td className="p-4 font-medium">{item.hari}</td>
                <td className="p-4">{item.waktu}</td>
                <td className="p-4">{item.kegiatan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
