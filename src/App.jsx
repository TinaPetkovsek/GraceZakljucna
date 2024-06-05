import { useEffect, useState } from "react";
import School from "./School";
import { Input } from "@/components/ui/input";
import Info from "./Info";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function App() {
  const [data, setData] = useState([]);
  const [obcine, setObcine] = useState([]);
  const [selectedObcina, setSelectedObcina] = useState("all");
  const [search, setSearch] = useState(0);
  const [filter, setFilter] = useState([]);

  async function getSchools() {
    const response = await fetch("https://static.404.si/grace/");
    const data = await response.json();
    setData(data);
  }

  async function getMunicipality() {
    const response = await fetch("https://static.404.si/grace/obcine/");
    const data = await response.json();
    setObcine(data);
  }

  useEffect(() => {
    getSchools();
    getMunicipality();
  }, []);

  useEffect(() => {
    setFilter(
      data
        .filter(
          (school) =>
            selectedObcina == "all" || school.obcina == selectedObcina,
        )
        .filter(
          (school) =>
            search == "" ||
            school.postna_stevilka.toString().startsWith(search),
        ),
    );
  }, [selectedObcina, search, data]);

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <>
      <div className="container mb-3 mt-3">
        <div className="flex gap-2">
          {/* Ne pozabi na onValueChange event. */}
          <Select onValueChange={(value) => setSelectedObcina(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Občina" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Vse občine</SelectItem>
              {obcine.map((obcina) => (
                <SelectItem value={obcina}>{obcina}</SelectItem>
              ))}
              {/* Uporabi map funkcijo, ki se bo sprehodila, čez vse občine in jih prikazala v obliki SelectItemov. */}
            </SelectContent>
          </Select>

          <Input
            placeholder="Išči po poštni številki"
            onChange={(value) => setSearch(value.target.value)}
            type="number"
          ></Input>
          <Info filter={filter}></Info>
          {filter.length}

          {/* Dodaj input, ki bo omogčal iskanje po poštni številki. Ne pozabi na onChange event. */}
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-3">
          {/* Uporabi map funkcijo, ki se bo sprehodila, čez vse šole in jih prikazala v obliki kartic. */}
          {/* Dodaj dva filtra: enega za filtriranje po obcini, drugega za filtriranje glede na poštno številko šole. */}
          {filter.map((school) => (
            <School data={school}></School>
          ))}
        </div>
      </div>
    </>
  );
}
