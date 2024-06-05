import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

export default function School(props) {
  const {
    web,
    ds,
    trr,
    regija,
    obcina,
    naziv,
    naslov,
    postna_stevilka,
    posta,
    email,
  } = props.data;

  return (
    <div className="container mb-3 mt-3">
      <Card>
        <CardHeader>
          <CardTitle>{naziv}</CardTitle>
          <CardDescription>{obcina}</CardDescription>
        </CardHeader>
        <CardContent className="font-bold">
          <p>
            Naslov: <span className="font-normal">{naslov}</span>
          </p>
          <p>
            E-poštni naslov:
            <span className="font-normal">
              <a href={`mailto:${email}`}> {email}</a>
            </span>
          </p>
        </CardContent>
        <CardFooter>
          <Dialog>
            <DialogTrigger>
              <Button>Več informacij</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Tukaj je več informacij o tej šoli</DialogTitle>
                <DialogDescription className="font-bold">
                  <li>
                    Spletna stran:{" "}
                    <a className="font-normal" href={web}>
                      {web}
                    </a>
                  </li>
                  <li>
                    Davčna številka: <span className="font-normal">{ds}</span>
                  </li>
                  <li>
                    Bančni račun: <span className="font-normal">{trr}</span>
                  </li>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
}
