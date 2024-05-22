import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function School(props) {
  const { regija, obcina, naziv, naslov, postna_stevilka, posta, email } =
    props.data;
  return (
    <div className="container mb-3 mt-3">
      <Card>
        <CardHeader>
          <CardTitle>{naziv}</CardTitle>
          <CardDescription>{obcina}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Naslov: {naslov}</p>
          <p>
            E-poštni naslov:
            <a href={`mailto:${email}`}> {email}</a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
