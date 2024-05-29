import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

export default function Info(props) {
  const filter = props.filter;

  return (
    <Sheet>
      <SheetTrigger>
        <Button>Info</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Koliko šol je trenutno prikazanih?</SheetTitle>
          <SheetDescription>
            <Table>
              <TableCaption>Seznam osnovnih šol</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Ime šole</TableHead>
                  <TableHead>E-mail šole</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filter.map((school) => (
                  <TableRow>
                    <TableCell>{school.naziv}</TableCell>
                    <TableCell>{school.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
